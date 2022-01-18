# Validation Reports for Chip Anomaly detection
## The repository includes the code for the report dashboard to detect Chip Anomalies.
### The project is designed with Flask as a web server, Jinja as the default templating engine and PostgreSQL as the relational database in the backend. It supports the following features:
## User Management Module
* User Login
* User Registration
* Email Confirmation
* Forgot /Reset Password
* Update Profile
## Monitoring and Reporting Module
* Monitor the experiment results on the dashboard.
* Download the validation report in PDF format

## Setting up a development environment

We assume that you have `git` and `virtualenv` and `virtualenvwrapper` installed.

    # Clone the code repository into ~/dev/my_app
    mkdir -p ~/dev
    cd ~/dev
    git clone https://github.com/jaydeepsingh25/Validation-Reports-for-chip-anomaly-detection.git my_app

    # Create the 'my_app' virtual environment
    mkvirtualenv -p PATH/TO/PYTHON my_app

    # Install required Python packages
    cd ~/dev/my_app
    workon my_app
    pip install -r requirements.txt


# Configuring SMTP

Specifically set all the MAIL_... settings to match your SMTP settings

Note that Google's SMTP server requires the configuration of "less secure apps".
See https://support.google.com/accounts/answer/6010255?hl=en

Note that Yahoo's SMTP server requires the configuration of "Allow apps that use less secure sign in".
See https://help.yahoo.com/kb/SLN27791.html


## Initializing the Database

    # Create DB tables and populate the roles and users tables
    python manage.py init_db

    # Or if you have Fabric installed:
    fab init_db


## Running the app

    # Start the Flask development web server
    python manage.py runserver

    # Or if you have Fabric installed:
    fab runserver

Point your web browser to http://localhost:5000/

You can make use of the following users:
- email `member@example.com` with password `Password1`.
- email `admin@example.com` with password `Password1`.


## Running the automated tests

    # Start the Flask development web server
    py.test tests/

    # Or if you have Fabric installed:
    fab test

