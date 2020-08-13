import time
import jwt
import json
from ..models.AllUserModel import AllUser


def auth_check(data):
    # auth_token=data['auth_token']
    key='masai'

    decoded_jwt=jwt.decode(data,key)

    if decoded_jwt['expire']>=time.time():
        return {'token_status':True}
    else:
        return {'token_status':False}


def auth_token(user_id ):

    key = 'masai'

    encoded_jwt = jwt.encode({'expire':time.time()},key = key)

    return {'error':False, 'user_id': user_id, "auth_token": str(encoded_jwt)}