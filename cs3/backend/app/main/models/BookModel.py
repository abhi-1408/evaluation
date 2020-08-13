from . import db
from .AllUserModel import AllUser
from .CategoryModel import Category

class Book(db.Model):
    __table__name = 'book'
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(AllUser.id))
    cat_id = db.Column(db.Integer, db.ForeignKey(Category.id))
    title = db.Column(db.String(200))
    price = db.Column(db.Float)
    quantity = db.Column(db.Integer)
    description = db.Column(db.String(200))
    author = db.Column(db.String(200))
    isDeleted = db.Column(db.Boolean)
    