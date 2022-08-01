from flask import Flask, Blueprint, request
from .models import User, Admin
from flask_jwt_extended import create_access_token
from . import db

auth = Blueprint('auth', __name__)

# this is our login route.  If the login is successful, it returns a token. Else, throws 401 error.
@auth.route('/login', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if not user or user.password != password:
        return 401
    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response

# login for admin
@auth.route('/admin', methods=["POST"])
def create_Admin_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    admin = Admin.query.filter_by(email=email).first()
    if not admin or admin.password != password:
        return 401
    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response

# this is our register route
@auth.route('/register', methods=["POST"])
def register():
    aDict = request.get_json()
    print(type(request))
    # check to ensure that email is not already taken by somebody
    user = User(email=aDict["email"], password=aDict["password"], username=aDict["username"])
    db.session.add(user)
    db.session.commit()
    response = {"registered": "yes"}
    return response, 200


