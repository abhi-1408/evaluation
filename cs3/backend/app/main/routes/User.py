from . import user
from flask import request
import json
import time
import jwt




@user.route('/')
def u_home():
    return 'user home'

