
from flask import Flask, request, jsonify
import pandas as pd
import pymssql as sql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS', user= 'giurato.fabrizio', password='xxx123##', database='giurato.fabrizio')


@app.route('/', methods=['GET'])     
def home():
    return render_template('app.component.html')


@app.route('/pippo', methods=['POST'])     
def login():
    user = request.form.get('user')
    pwd = request.form.get('pwd')
    data = {"user": user , "pwd" : pwd }
    return jsonify(data)



if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)