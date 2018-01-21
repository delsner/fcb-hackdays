from datetime import datetime, timezone
from flask import Blueprint, make_response, request
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_jwt_simple import jwt_required, get_jwt_identity

quiz_api = Blueprint('quiz_api', __name__)

from server.app import mongo


@quiz_api.route("/<quiz_id>/can_participate", methods=['GET'])
@jwt_required
def can_user_participate_in_quiz(quiz_id):
    email = get_jwt_identity()
    user = mongo.db.users.find_one({'email': email})
    score = mongo.db.scores.find_one({'user_id': ObjectId(user['_id']), 'quiz_id': ObjectId(quiz_id)})
    res = False
    if score is None or (
            score['end_date'] is None and check_time_constraint(datetime.now(timezone.utc), score['start_date'])):
        res = True
    return make_response({'canParticipate': res}), 200


@quiz_api.route("/latest", methods=['GET'])
def get_latest_quiz():
    quiz = mongo.db.quizzes.find({}, {"_id": 1, "name": 1, "questions": 1}).sort([('_id', -1)]).limit(1)[0]
    return make_response(dumps(quiz)), 200


@quiz_api.route("/<quiz_id>/start", methods=['GET'])
@jwt_required
def start_quiz(quiz_id):
    email = get_jwt_identity()
    user = mongo.db.users.find_one({'email': email})
    score_id = save_score_for_quiz_and_user(quiz_id=ObjectId(quiz_id),
                                            user_id=ObjectId(user['_id']),
                                            points=None,
                                            start_date=datetime.now(timezone.utc))
    return make_response(dumps(mongo.db.scores.find_one({"_id": score_id}))), 200


@quiz_api.route("/<quiz_id>/verify", methods=['POST'])
@jwt_required
def verify_quiz(quiz_id):
    email = get_jwt_identity()
    user = mongo.db.users.find_one({'email': email})
    answers = request.get_json()
    answers_correct = mongo.db.quizzes.find_one({"_id": ObjectId(quiz_id)})['answers']
    points = calculate_points(answers_correct, answers)
    score_id = save_score_for_quiz_and_user(quiz_id=ObjectId(quiz_id),
                                            user_id=ObjectId(user['_id']),
                                            points=points,
                                            end_date=datetime.now(timezone.utc))
    return make_response(dumps(mongo.db.scores.find_one({"_id": score_id}))), 200


@quiz_api.route("/<quiz_id>/top_scores", methods=['GET'])
@jwt_required
def get_top_scores(quiz_id):
    email = get_jwt_identity()
    user_id = mongo.db.users.find_one({'email': email})['_id']
    scores = mongo.db.scores.find({"quiz_id": ObjectId(quiz_id), "points": {'$ne': None}}).sort([('points', -1)])
    scores = list(scores)
    for s in scores:
        if s['user_id'] == user_id:
            s['email'] = email
    return make_response(dumps(scores)), 200


def calculate_points(answers_correct, answers):
    points = 0
    for i in range(len(answers)):
        points += answers[i] == answers_correct[i]
    return points


def save_score_for_quiz_and_user(quiz_id, user_id, points, start_date=None, end_date=None):
    if start_date is not None:
        score = {
            'quiz_id': quiz_id,
            'user_id': user_id,
            'points': points,
            'start_date': start_date
        }
        return mongo.db.scores.insert_one(score).inserted_id

    elif end_date is not None:
        start_date = mongo.db.scores.find_one({'quiz_id': quiz_id, 'user_id': user_id})['start_date']
        score = {
            'quiz_id': quiz_id,
            'user_id': user_id,
            'points': points,
            'start_date': start_date,
            'end_date': end_date,
        }
        if check_time_constraint(start_date, end_date):
            return mongo.db.scores.update_one({'quiz_id': quiz_id, 'user_id': user_id}, {"$set": score}).upserted_id
        else:
            score['points'] = 0
            return mongo.db.scores.update_one({'quiz_id': quiz_id, 'user_id': user_id}, {"$set": score}).upserted_id

    return False


def check_time_constraint(start_date, end_date):
    return (end_date - start_date).seconds < 70
