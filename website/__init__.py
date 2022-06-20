from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'DMDJDN'

    from .views import views  # name of blueprint

    app.register_blueprint(views, url_prefix="/")

    return app
