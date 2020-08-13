from . import user
from flask import request
import json
import time
import jwt
from ..services.alluser import login_user,register_user
from ..services.book import create_new_book
from ..services.category import create_new_category



@user.route('/')
def u_home():
    return 'user home'



@user.route('/login',methods = ['POST'])
def u_login():
    credentials = request.json
    res = login_user(credentials)

    return json.dumps(res)



@user.route('/register',methods = ['POST'])
def u_register():
    credentials = request.json
    res = register_user(credentials)

    return json.dumps(res)


@user.route('/createbook',methods = ['POST'])
def u_create_book():
    data = request.json
    res = create_new_book(data)

    return json.dumps(res)

@user.route('/createcat',methods = ['POST'])
def u_create_cat():
    data = request.json
    res = create_new_category(data)

    return json.dumps(res)