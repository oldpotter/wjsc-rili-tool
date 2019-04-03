# -*- coding: UTF-8 -*- 
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__, static_folder='../dist/static', template_folder='../dist')
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
	if app.debug:
 		return requests.get('http://localhost:8080/{}'.format(path)).text
	return render_template('index.html')