from os import urandom
import app
import io
import base64
import seaborn as sns
import pdfkit
import AdvancedHTMLParser
import random

from flask_cors import CORS, cross_origin
from flask import json, request
from flask import render_template, make_response
from flask import Markup, Blueprint
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure

from flask_sqlalchemy import SQLAlchemy 
from flask_user import login_required, UserManager, UserMixin, SQLAlchemyAdapter 

from app.download.helpers.utils import get_app_data, load_font, get_image_data, mark_faulty_pins
from app.download.helpers.config import threshold, verBlocks

download_blueprint = Blueprint('download', __name__, template_folder='templates')

app_data = get_app_data()
parser = AdvancedHTMLParser.AdvancedHTMLParser()

common_data = app_data.get('common_data')

connectors_data_v1 = app_data.get('connectors_data_v1')
connectors_data_v2 = app_data.get('connectors_data_v2')

encoded_font = load_font()


port_similarity = []

circle_svg_data = Markup(open('app/download/static/images/circle-fill.svg').read())

def prepare_data_for_report_v1():
    no_of_entries_in_block = 10
    for connector in connectors_data_v1:
        port_similarity.append(int(connectors_data_v1[connector]['Connector Analysis']['Port Similarity'].split('%')[0]))
        connectors_data_v1[connector]['svgData'] = Markup(open('app/download/static/images/'+connectors_data_v1[connector]['imageUrl']+'.svg').read())
        
        connectors_data_v1[connector]['Partitions'] = []
        keys_arr = list(connectors_data_v1[connector]['Pin Analysis'].keys())
        for index in range(0,len(keys_arr),no_of_entries_in_block):
            partition_chunk = keys_arr[index:index+no_of_entries_in_block]
            connectors_data_v1[connector]['Partitions'].append(partition_chunk)

def prepare_data_for_report_v2(connectors_data_v2):
    no_of_entries_in_block =16
    for connector in connectors_data_v2:
        connectors_data_v2[connector]['Partitions'] = []
        keys_arr = list(connectors_data_v2[connector]['Pin Analysis'].keys())
        for index in range(0,len(keys_arr),no_of_entries_in_block):
            partition_chunk = keys_arr[index:index+no_of_entries_in_block]
            connectors_data_v2[connector]['Partitions'].append(partition_chunk)

def generate_plot():
    sns.set()
    fig = Figure()
    axis = fig.add_subplot(1, 1, 1)
    #axis.set_title("title")
    axis.set_xlabel("Connector")
    axis.set_ylabel("Performance")
    axis.grid()
    axis.bar(connectors_data_v1.keys(), port_similarity)
    axis.plot(connectors_data_v1.keys(), port_similarity, "ro-")
    
    # Convert plot to PNG image
    pngImage = io.BytesIO()
    FigureCanvas(fig).print_png(pngImage)
    
    # Encode PNG image to base64 string
    pngImageB64String = "data:image/png;base64,"
    pngImageB64String += base64.b64encode(pngImage.getvalue()).decode('utf8')
    
    return pngImageB64String

prepare_data_for_report_v1()
#prepare_data_for_report_v2()
plot_image = generate_plot()

#A route to download the report version 1
@download_blueprint.route('/api/report/download/v1', methods=['GET'])
#@login_required
@cross_origin(supports_credentials=True)
def report_v1():
    prepare_data_for_report_v1()
    css = "app/download/static/css/main.css"
    html_v1 = render_template("v1/report.html")
    parser.parseStr(html_v1)
    mark_faulty_pins(parser, connectors_data_v1)
    pdf = pdfkit.from_string(parser.getFormattedHTML(), output_path=False, css=css)
    response = make_response(pdf)
    response.headers["Content-Type"] = "application/pdf"
    response.headers["Content-Disposition"] = "inline; filename=report.pdf"
    return response

#A route to download the report version 2
@download_blueprint.route('/api/report/download/v2', methods=["GET","POST"])
#@login_required
@cross_origin(supports_credentials=True)
def report_v2():
    json_data = request.get_json() or connectors_data_v2
    prepare_data_for_report_v2(json_data)
    css = "app/download/static/css/main.css"
    html_v2 = render_template("v2/report.html", connectors_data_v2 = json_data)
    print(html_v2)
    options={
        'page-size':'A4', 
        'dpi': 400,
        'print-media-type': '',
        'zoom': '1.25',
        'margin-left': '5mm',
        'margin-right': '5mm',
        'margin-top': '0mm',
        'margin-bottom': '0mm'
    }
    pdf = pdfkit.from_string(html_v2 , output_path=False, css=css, options=options)
    response = make_response(pdf)
    response.headers["Content-Type"] = "application/pdf"
    response.headers["Content-Disposition"] = "inline; filename=report.pdf"
    return response

@download_blueprint.context_processor
def inject_user():
    return dict(
        encoded_font = encoded_font,
        verBlocks = verBlocks,
        data = common_data, 
        graph_image = plot_image, 
        connectors_data_v1 = connectors_data_v1,
        get_image_data = get_image_data,
        threshold = threshold,
        circle_svg_data= circle_svg_data)