# this will do ur create app
from flask import Flask 
from config import app_config
from flask_migrate import Migrate
from .models import *
from .routes import user as user_blueprint
from .routes import book as book_blueprint
from flask_sqlalchemy import SQLAlchemy
from flask import Blueprint
from flask_cors import CORS

def create_app(config_name):
    app=Flask(__name__,instance_relative_config=True)
    CORS(app)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')


    app.register_blueprint(user_blueprint,url_prefix='/user')
    app.register_blueprint(book_blueprint,url_prefix='/book')
    db.init_app(app)
    migrate=Migrate(app,db)

    return app