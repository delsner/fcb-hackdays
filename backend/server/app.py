from flask_api import FlaskAPI
from flask_cors import CORS
from flask_jwt_simple import JWTManager
from flask_socketio import SocketIO
from flask_pymongo import PyMongo
import json

# local imports
from instance.config import app_config

# mongodb
mongo = PyMongo()

# socketIO server
socketio = SocketIO(path='/api/socket-io', engineio_logger=True)

# jwt manager
jwt = JWTManager()


def create_app(config_name):
    """
    Create a new flask application instance with config name

    :param config_name:
    :return: flask app
    """

    # initialize flask app
    app = FlaskAPI(__name__, instance_relative_config=True)

    # configuration
    app.config.from_object(app_config[config_name])
    CORS(app)

    mongo.init_app(app)
    socketio.init_app(app)
    jwt.init_app(app)

    # add blueprints/routes

    # user API
    from server.api.user import user_api
    app.register_blueprint(user_api, url_prefix='/api/user')

    # score API
    from server.api.score import score_api
    app.register_blueprint(score_api, url_prefix='/api/score')

    # quiz API
    from server.api.quiz import quiz_api
    app.register_blueprint(quiz_api, url_prefix='/api/quiz')

    # challenge API
    from server.api.challenge import challenge_api
    app.register_blueprint(challenge_api, url_prefix='/api/challenge')

    # admin API
    from server.api.admin import admin_api
    app.register_blueprint(admin_api, url_prefix='/api/admin')

    return app
