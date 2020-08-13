from flask import Blueprint


user = Blueprint('user', __name__)
book = Blueprint('book', __name__)


from . import User 
from . import Book 
