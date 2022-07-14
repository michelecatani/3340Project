from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager
from flask_cors import CORS

## create our database.

db = SQLAlchemy()
DB_NAME = "database.db"

## this function creates our app, and it is called in run.py in the parent directory

def create_app():
    app = Flask(__name__)
    # make sure we configure this to use enviornment variables
    app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    app.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
    CORS(app)
    jwt = JWTManager(app)
    db.init_app(app)

    ## register our blueprints

    from .auth import auth
    from .items import items

    app.register_blueprint(auth, url_prefix='/')
    app.register_blueprint(items, url_prefix='/')

    from .models import User

    create_database(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Created Database!')
