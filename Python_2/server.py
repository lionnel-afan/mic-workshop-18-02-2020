
from flask import Flask, request, Response, jsonify
from flask_cors import CORS, cross_origin

import Utils.Utils as utils
from User import ConnectedUser
import json
from json import JSONEncoder


# Initialize the Flask application
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class JsonEncoder(JSONEncoder):
    def default(self, o):
        return o.__dict__


def _init():
    # A definir
    global loggedUsers
    loggedUsers = {}
    return None


@app.route('/api/login', methods=['POST'])
def login():
      # Continue
    username = request.get_json()['username']
    ip = request.remote_addr
    name = request.get_json()["name"]

   # Request for a fake Token
    token = utils.get_token()

    # Add a connected User
    user = ConnectedUser(username, name)
    user.IP = ip
    user.IsActive = len(loggedUsers) + 1
    loggedUsers[token] = user.__dict__

    data = {'status': 200, 'token': token,
            'username': username, 'users': loggedUsers}
    # response = json.dumps(data, cls=JsonEncoder)
    #  Response(response, mimetype='application/json')
    return jsonify(data)


@app.route('/api/user', methods=['GET'])
def getUserList():
    return ""


if __name__ == "__main__":
    _init()
    # Start the server
    app.run(host="0.0.0.0", port=7777, threaded=True, debug=True)
