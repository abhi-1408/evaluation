from ..models import db
from ..models.BookModel import Book
import json


def create_new_book(data):
    
    if data is None:
        return ({'error': True, 'error_found': 'data is empty'})
    
    
    book = Book(
        user_id = data['user_id'],
        cat_id = data['cat_id'],
        title = data['title'],
        price = data['price'],
        quantity = data['quantity'],
        description = data['description'],
        author = data['author'],
        isDeleted = False
        
    )
    try :
        db.session.add(book)
        db.session.commit()

        return ({'error': False, 'message': 'book added successfully'})
    except:
        return ({'error':True, 'message':'error occured can\'t add book'})   



    