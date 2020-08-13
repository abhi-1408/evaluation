from ..models import db
from ..models.BookModel import Book
import json
from sqlalchemy import desc


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


def get_all_books(page_size = 2,page = 1):
    page_size = 2
    page = 1
    all_books = Book.query.offset(page_size*(page-1)).limit(page_size).all()
    # all_books.limit(page_size)
    # all_books.offset(page*page_size)
    # all_books.all()
    data = []
    for book in all_books:
        temp_dict = {}
        temp_dict['book_id'] = book.id
        temp_dict['user_id'] = book.user_id
        temp_dict['cat_id'] = book.cat_id
        temp_dict['title'] = book.title
        temp_dict['price'] = book.price
        temp_dict['quantity'] = book.quantity
        temp_dict['author'] = book.author
        temp_dict['isDeleted'] = book.isDeleted
        temp_dict['description'] = book.description
        data.append(temp_dict)

    return data



def get_filtered_books(data,page_size = 2,page = 1):

    if 'sort_by' in data:
        msg = data['sort_by'][0]
        val =data['sort_by'][1]
        if msg == "price":
            if val == 'desc':
                all_books = Book.query.order_by(desc(Book.price)).offset(page_size*(page-1)).limit(page_size).all()
                data = []
                for book in all_books:
                    temp_dict = {}
                    temp_dict['book_id'] = book.id
                    temp_dict['user_id'] = book.user_id
                    temp_dict['cat_id'] = book.cat_id
                    temp_dict['title'] = book.title
                    temp_dict['price'] = book.price
                    temp_dict['quantity'] = book.quantity
                    temp_dict['author'] = book.author
                    temp_dict['isDeleted'] = book.isDeleted
                    temp_dict['description'] = book.description
                    data.append(temp_dict)

                return data
            else:
                all_books = Book.query.order_by((Book.price)).offset(page_size*(page-1)).limit(page_size).all()
                data = []
                for book in all_books:
                    temp_dict = {}
                    temp_dict['book_id'] = book.id
                    temp_dict['user_id'] = book.user_id
                    temp_dict['cat_id'] = book.cat_id
                    temp_dict['title'] = book.title
                    temp_dict['price'] = book.price
                    temp_dict['quantity'] = book.quantity
                    temp_dict['author'] = book.author
                    temp_dict['isDeleted'] = book.isDeleted
                    temp_dict['description'] = book.description
                    data.append(temp_dict)

                return data
        elif msg == "quantity":
            if val == 'desc':
                all_books = Book.query.order_by(desc(Book.quantity)).offset(page_size*(page-1)).limit(page_size).all()
                data = []
                for book in all_books:
                    temp_dict = {}
                    temp_dict['book_id'] = book.id
                    temp_dict['user_id'] = book.user_id
                    temp_dict['cat_id'] = book.cat_id
                    temp_dict['title'] = book.title
                    temp_dict['price'] = book.price
                    temp_dict['quantity'] = book.quantity
                    temp_dict['author'] = book.author
                    temp_dict['isDeleted'] = book.isDeleted
                    temp_dict['description'] = book.description
                    data.append(temp_dict)

                return data
            else:
                all_books = Book.query.order_by(Book.quantity).offset(page_size*(page-1)).limit(page_size).all()
                data = []
                for book in all_books:
                    temp_dict = {}
                    temp_dict['book_id'] = book.id
                    temp_dict['user_id'] = book.user_id
                    temp_dict['cat_id'] = book.cat_id
                    temp_dict['title'] = book.title
                    temp_dict['price'] = book.price
                    temp_dict['quantity'] = book.quantity
                    temp_dict['author'] = book.author
                    temp_dict['isDeleted'] = book.isDeleted
                    temp_dict['description'] = book.description
                    data.append(temp_dict)

                return data
    elif 'author' in data:
        msg = data['author'][0]
        val = data['author'][1]
        all_books = Book.query.filter(Book.author.like(val)).offset(page_size*(page-1)).limit(page_size).all()
        data = []
        for book in all_books:
            temp_dict = {}
            temp_dict['book_id'] = book.id
            temp_dict['user_id'] = book.user_id
            temp_dict['cat_id'] = book.cat_id
            temp_dict['title'] = book.title
            temp_dict['price'] = book.price
            temp_dict['quantity'] = book.quantity
            temp_dict['author'] = book.author
            temp_dict['isDeleted'] = book.isDeleted
            temp_dict['description'] = book.description
            data.append(temp_dict)

        return data

