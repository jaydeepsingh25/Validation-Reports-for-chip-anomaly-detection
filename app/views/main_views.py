# Copyright 2014 SolidBuilds.com. All rights reserved
#
# Authors: Ling Thio <ling.thio@gmail.com>


from flask import Blueprint, helpers, redirect, render_template
from flask import request, url_for
from flask_user import current_user, login_required, roles_required
import flask
from app import db
from app.models.user_models import UserProfileForm

from app.download.report_download_api import connectors_data_v1, common_data, get_image_data, threshold, circle_svg_data, plot_image, verBlocks, encoded_font
main_blueprint = Blueprint('main', __name__, template_folder='templates')



# The Home page is accessible to anyone
# @main_blueprint.route('/')
# def home_page():
#     return render_template('main/home_page.html')


# The User page is accessible to authenticated users (users that have logged in)
@main_blueprint.route('/dashboard')
@login_required  # Limits access to authenticated users
def member_page():
    #return flask.redirect('http://localhost:4200/dashboard')
    return render_template('main/user_page.html')


# The Admin page is accessible to users with the 'admin' role
@main_blueprint.route('/admin')
@roles_required('admin')  # Limits access to users with the 'admin' role
def admin_page():
    return render_template('main/admin_page.html')


@main_blueprint.route('/main/profile', methods=['GET', 'POST'])
@login_required
def user_profile_page():
    # Initialize form
    form = UserProfileForm(request.form, obj=current_user)

    # Process valid POST
    if request.method == 'POST' and form.validate():
        # Copy form fields to user_profile fields
        form.populate_obj(current_user)

        # Save user_profile
        db.session.commit()

        # Redirect to home page
        return redirect(url_for('main.home_page'))

    # Process GET or invalid POST
    return render_template('main/user_profile_page.html',
                           form=form)

@main_blueprint.context_processor
def inject_user():
    return dict(
        encoded_font = encoded_font,
        verBlocks = verBlocks,
        data = common_data, 
        graph_image = plot_image, 
        connectors_data = connectors_data_v1, 
        get_image_data = get_image_data,
        threshold = threshold,
        circle_svg_data= circle_svg_data)