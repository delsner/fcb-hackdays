from flask import Blueprint, make_response, jsonify, request

user_api = Blueprint('cluster_api', __name__)


@user_api.route("/", methods=['GET'])
def get_all_users():
    #     clusters = User.get_all()
    # results = jsonify(list(map(cluster_to_dict, clusters)))
    return make_response({}), 200

@user_api.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    params = request.get_json()
    user = request.get_json() #{username,password}

    # TODO: search for user in db
    if username != 'test' or password != 'test':
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    ret = {'jwt': create_jwt(identity=username)}
    return jsonify(ret), 200
