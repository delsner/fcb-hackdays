from flask import Blueprint, make_response, request
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_jwt_simple import jwt_required

challenge_api = Blueprint('challenge_api', __name__)

from server.app import mongo


@challenge_api.route("/", methods=['GET'])
@jwt_required
def get_all_challenges():
    challenges = mongo.db.challenges.find({})
    return make_response(dumps(challenges), 200)


@challenge_api.route("/", methods=['POST'])
@jwt_required
def create_challenge():
    challenge = request.get_json()
    challenge_id = mongo.db.challenges.insert_one(challenge).inserted_id
    return make_response(dumps(mongo.db.challenges.find_one({"_id": challenge_id})), 200)


@challenge_api.route("/<challenge_id>", methods=['GET'])
@jwt_required
def get_single_challenge(challenge_id):
    challenge = mongo.db.challenges.find_one({"_id": ObjectId(challenge_id)})
    return make_response(dumps(challenge), 200)
