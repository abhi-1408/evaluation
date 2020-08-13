from . import book
from flask import request
import json
import time
import jwt
from ..services.book import create_new_book,update_book,delete_book,get_all_books,get_filtered_books




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


@book.route('/getallbooks',methods = ['POST'])
def b_get_all_book():
    data = request.json
    res = get_all_books(data['page_size'],data['page'])

    return json.dumps(res)



@book.route('/getfilteredbooks',methods = ['POST'])
def b_get_filter_book():
    data = request.json
    res = get_filtered_books(data,data['page_size'],data['page'])

    return json.dumps(res)