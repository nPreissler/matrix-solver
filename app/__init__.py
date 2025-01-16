# init flask and config app
from flask import Flask 

def create_app():
    appl = Flask(__name__)


    # rotes register 
    from .routes import main
    appl.register_blueprint(main)

    return appl