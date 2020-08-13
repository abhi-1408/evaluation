# this will do ur create app
from flask import Flask 
from config import app_config
from flask_migrate import Migrate
from .models import *
from .routes import user as user_blueprint
from flask_sqlalchemy import SQLAlchemy
from flask import Blueprint


def create_app(config_name):
    app=Flask(__name__,instance_relative_config=True)
    
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')


    app.register_blueprint(user_blueprint,url_prefix='/user')
    db.init_app(app)
    migrate=Migrate(app,db)

    return app