from . import book
from flask import request
import json
import time
import jwt
from ..services.book import create_new_book,update_book,delete_book




@book.route('/')
def b_home():
    return 'book home'

@book.route('/createbook',methods = ['POST'])
def b_create_book():
    data = request.json
    res = create_new_book(data)

    return json.dumps(res)

@book.route('/deletebook',methods = ['POST'])
def b_del_book():
    data = request.json
    res = delete_book(data)

    return json.dumps(res)


@book.route('/updatebook',methods = ['POST'])
def b_upd_book():
    data = request.json
    res = update_book(data)

    return json.dumps(res)
