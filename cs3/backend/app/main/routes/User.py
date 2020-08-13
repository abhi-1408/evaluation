from . import user
from flask import request
import json
import time
import jwt
from ..services.alluser import login_user,register_user



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

