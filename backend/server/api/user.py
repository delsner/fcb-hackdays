from flask import Blueprint, make_response, jsonify, request
from flask_jwt_simple import create_jwt
from werkzeug.security import generate_password_hash, check_password_hash

user_api = Blueprint('user_api', __name__)

from server.app import mongo


@user_api.route('/signup', methods=['POST'])
def signup():
    creds = request.get_json()  # {email}
    res = {}

    # if user does not exist create and store with init pw
    if mongo.db.users.find_one({'email': creds['email']}) is None:
        creds['password'] = generate_password_hash('init_pw')
        user_id = mongo.db.users.insert_one(creds).inserted_id

    res = {'jwt': create_jwt(identity=creds['email'])}
    return jsonify(res), 200


@user_api.route('/login', methods=['POST'])
def login():
    creds = request.get_json()  # {email, password}
    user = mongo.db.users.find_one({'email': creds['email']})
    res = {}

    if check_password_hash(user['password'], creds['password']):
        res = {'jwt': create_jwt(identity=user['email'])}

    return jsonify(res), 200
