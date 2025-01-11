# init flask and config app
from flask import Flask 

def create_app():
    app = Flask(__name__)


    # rotes register 
    from .routes import main
    app.register_blueprint(main)

    return app