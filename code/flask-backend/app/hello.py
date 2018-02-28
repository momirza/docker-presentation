from flask import Flask
from flask_cors import CORS

from pymongo import MongoClient
import json

app = Flask(__name__)
CORS(app)

client = MongoClient("db", 27017)


@app.route("/")
def hello():
    return json.dumps(client['test']['welcome'].find_one()['welcome_text'])