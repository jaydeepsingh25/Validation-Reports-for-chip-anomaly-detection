import os
from flask.helpers import url_for
from app import download
import json
import base64
import app
from AdvancedHTMLParser.Parser import AdvancedHTMLParser
#import app
from app.download.helpers.config import threshold
# from app.download.report_download_api import download_blueprint


def get_app_data():
    data = {}
    # filename = os.path.join(download, 'data.json')
    # with open(filename) as f:
    # app.config['SERVER_NAME'] = 'localhost'
    #print(os.getcwd())
    #with open('./data.json') as f:
    #with open(url_for('data/data.json')) as f:
    #with download_blueprint.open_resource('data/data.json') as f:
    with open('app/download/static/data/data.json') as f:
        data['common_data'] = json.load(f)

    with open('app/download/static/data/connectors.json') as f:
        data['connectors_data_v1'] = json.load(f)

    ## adding sample data -- test pdf report generation
    with open('app/download/static/sample_data/connectors.json') as f:
        data['connectors_data_v2'] = json.load(f)
    
    return data

def load_font():
    with open("app/download/static/fonts/ProximaNova-Regular.otf" , "rb") as font_file:
        encoded_font = "data:application/font-woff2;charset=utf-8;base64," + base64.b64encode(font_file.read()).decode('utf8')
        return encoded_font

def get_image_data(img_file,format = "png"):
    hyperlink_image = ""
    encoded_prefix = "data:image/png;base64,"
    if format == "svg":
        encoded_prefix = "data:image/svg+xml;base64,"
    with open("app/download/static/images/" + img_file + "." + format , "rb") as img_file:
        hyperlink_image = encoded_prefix + base64.b64encode(img_file.read()).decode('utf8')
    return hyperlink_image

def mark_faulty_pins(parser: AdvancedHTMLParser, connectors_data):
    for connector in connectors_data:
        pin_data = connectors_data[connector]['Pin Analysis']
        for pin in pin_data:
            pin_no = pin.split("-")[1]
            pin_value = int(pin_data[pin])
            if pin_value < threshold:
                parser.getElementById(connector + "-large").getElementById("port-" + pin_no).setAttribute("style", "fill: red")