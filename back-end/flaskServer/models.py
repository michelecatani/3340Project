from dataclasses import dataclass
from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from sqlalchemy.orm import backref
from datetime import datetime, timedelta

import json
import os

"""class Item (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    description = db.Column(db.String(10000))
    post_date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))"""

# here will be all of our database classes. User is commented out for simplicity

@dataclass
class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    username = db.Column(db.String(150), unique=True)
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

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return self.email

# expand below class
@dataclass
class Admin(db.Model):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))

@dataclass
class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True)
    author = db.Column(db.String(150))
    currHighestBid = db.Column(db.Integer, default=0)
    currWinner = db.Column(db.String(150), default="No bids yet!")
    endAuction = db.Column(db.Date, default=datetime.now() + timedelta(days=1))
    category = db.Column(db.String(150))
    description = db.Column(db.String(280))
    image_file = db.Column(db.UnicodeText, default=None)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return self.name + "Image file:" + self.image_file


