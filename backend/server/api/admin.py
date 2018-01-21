from flask import Blueprint, make_response, request
from flask_jwt_simple import jwt_required
import json

admin_api = Blueprint('admin_api', __name__)

from server.app import mongo


@admin_api.route("/init_data", methods=['GET'])
def init_data():
    # init data
    data = json.load(open('data.json', encoding='utf-8'))
    for d in data.keys():
        print('Inserting into: ', d)
        mongo.db[d].insert_many(data[d])

    return make_response({}), 200
