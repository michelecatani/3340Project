from flask import Blueprint, render_template
from flask_login import  current_user


# code for creating "routes"

views = Blueprint('views', __name__)

# name of our blue print


@views.route('/')
def home():
    return render_template("home.html", user=current_user)
