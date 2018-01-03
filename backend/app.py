from flask import Flask, jsonify, Response, request
from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_jwt_simple import JWTManager, jwt_required, create_jwt, get_jwt_identity

# mongodb config
DB_HOST_MONGO = 'mongodb://db:27017/'
DB_NAME_MONGO = "db"
DB_COLLECTION_MONGO = "board"
DB_USERNAME = 'root'
DB_PASSWORD = 'admin'

# mongodb connection
mongo_client = MongoClient(DB_HOST_MONGO)
mongo_client[DB_NAME_MONGO].authenticate(DB_USERNAME, DB_PASSWORD, mechanism='SCRAM-SHA-1')
db = mongo_client[DB_NAME_MONGO]
collection = db[DB_COLLECTION_MONGO]

# start flask app
app = Flask(__name__)

# JWT config
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
jwt = JWTManager(app)

@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    params = request.get_json()
    username = params.get('username', None)
    password = params.get('password', None)

    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    # TODO: search for user in db
    if username != 'test' or password != 'test':
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    ret = {'jwt': create_jwt(identity=username)}
    return jsonify(ret), 200

@app.route('/api/board/<board_id>', methods=['GET'])
def get_single_board(board_id):
    board = collection.find_one({"_id": ObjectId(board_id)})
    return dumps(board)


@app.route('/api/board', methods=['GET'])
@jwt_required
def get_all_boards():
    print(jsonify({'hello_from': get_jwt_identity()}), 200)
    boards = collection.find()
    return dumps(boards)


@app.route('/api/board', methods=['POST'])
def create_board():
    board = request.get_json()
    board_id = collection.insert_one(board).inserted_id
    return dumps(collection.find_one({"_id": board_id}))


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=8081)
