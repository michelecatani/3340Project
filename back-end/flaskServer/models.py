from dataclasses import dataclass
from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

import json

"""class Item (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    description = db.Column(db.String(10000))
    post_date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))"""

## here will be all of our database classes. User is commented out for simplicity

@dataclass
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    #username = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    #first_name = db.Column(db.String(150))
    #last_name = db.Column(db.String(150))
    #address = db.Column(db.String(250))
    #phone = db.Column(db.String(20))
    #state = db.Column(db.String(2))
    #country = db.Column(db.String(150))
    #credit = db.Column(db.String(16))
    #expiry = db.Column(db.DateTime)
    #goodstanding = db.Column(db.Boolean, unique=False, default=True)
    #items = db.relationship('Item')
    #watchlist = db.relationship('Watchlist')

## expand below class
@dataclass
class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique= True)
    ## price, inStock (bool), ... etc 
    def as_dict(self):
        return {}