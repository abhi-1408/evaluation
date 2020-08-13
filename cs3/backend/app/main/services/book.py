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



def delete_book(data):
    
    user_id = data['user_id']
    book_id = data['book_id']

    del_book = Book.query.filter(Book.user_id == user_id).filter(Book.id == book_id).first()
    del_book.isDeleted = True 
    # db.session.execute(del_book)
    db.session.commit()

    # del_book = Book.delete().where(Book.user_id == user_id, Book.id == book_id)
    # db.session.execute(del_book)
    # db.session.commit()

    return {'error':False, 'message':"book deleted"}





def update_book(data):
    
    user_id = data['user_id']
    book_id = data['book_id']

    upd_book = Book.query.filter(Book.user_id == user_id, Book.id == book_id).first()
    upd_book.title = data['title']
    upd_book.price = data['price']
    upd_book.quantity = data['quantity']
    upd_book.author = data['author']
    upd_book.description = data['description']
    # db.session.execute(upd_book)
    db.session.commit()

    return {'error':False, 'message':"book updated"}