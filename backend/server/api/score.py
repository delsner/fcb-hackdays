from flask import Blueprint, make_response, request
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_jwt_simple import jwt_required

score_api = Blueprint('score_api', __name__)

from server.app import mongo
from server.app import socketio

@score_api.route("/", methods=['GET'])
@jwt_required
def get_all_scores():
    #     clusters = User.get_all()
    # results = jsonify(list(map(cluster_to_dict, clusters)))

    socketio.emit('new_data_available', {'message': 'update'})
    scores = mongo.db.scores.find({})
    return make_response(dumps(scores)), 200


@score_api.route("/", methods=['POST'])
@jwt_required
def create_score():
    score = request.get_json()
    score_id = mongo.db.scores.insert_one(score).inserted_id
    return make_response(dumps(mongo.db.scores.find_one({"_id": score_id}))), 200


@score_api.route("/<score_id>", methods=['GET'])
@jwt_required
def get_single_score(score_id):
    score = mongo.db.scores.find_one({"_id": ObjectId(score_id)})
    return make_response(dumps(score)), 200
