from ..models import db
from ..models.CategoryModel import Category
import json


def create_new_category(data):
    
    if data is None:
        return ({'error': True, 'error_found': 'data is empty'})
    
    
    cat = Category(
        title = data['title'],
        description = data['description']
    )
    try :
        db.session.add(cat)
        db.session.commit()

        return ({'error': False, 'message': 'category added successfully'})
    except:
        return ({'error':True, 'message':'error occured can\'t add category'})   



    