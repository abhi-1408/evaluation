from ..models import db
from ..models.AllUserModel import AllUser
import json


def register_user(data):
    
    if data is None:
        return ({'error': True, 'error_found': 'data is empty'})
    
    
    user = AllUser(
        name=data['name'],
        email=data['email'],
        password=data['password'],
        phone=data['phone'],
        role=data['role']
    )
    try :
        db.session.add(user)
        db.session.commit()

        return ({'error': False, 'message': 'registered successfully'})
    except:
        return ({'error':True, 'message':'duplicate email'})   


def login_user(credentials):
    
    username = credentials['username']
    password = credentials['password']
    
    if username == "" or password == "":
        return (
            {'error': True, 'error_found': 'one or more field is empty'}
        )
    elif type(username) != str or type(password) != str:
        return (
            {'error': True, 'error_found': 'Insert valid data type'}
        )

    
    results = db.session.execute('''SELECT * FROM all_user''')
    flag = 0
    for result in results:
        if result['email'] == username:
            if result['password'] == password:
                flag=1
                break

    if(flag==1):
        return ({'error':False,'message':'login successful'})
    else:
        return ({'error':False,'message':'login failed'})
    

def logout_user():
    return {}

    