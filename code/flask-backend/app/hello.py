from flask import Flask

from pymongo import MongoClient
import json

app = Flask(__name__)

client = MongoClient("db", 27017)


@app.route("/api/")
def hello():
    return json.dumps(
        client['test']['welcome'].find_one()['welcome_text']
    )
