from flask import Blueprint


#code for creating "routes"

views = Blueprint('views', __name__)

#name of our blue print
@views.route('/')
def home():
    return "<h1> Test</h1>"

