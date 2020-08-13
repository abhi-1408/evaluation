from . import db


class AllUser(db.Model):
    __table__name = 'alluser'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(200))
    phone = db.Column(db.String(10))
    email = db.Column(db.String(200),unique = True)
    password = db.Column(db.String(200))
    role = db.Column(db.String(10))
    