from flask import Flask,render_template, request, redirect, url_for, Response
app = Flask(__name__)

import pandas as pd 
import pymssql

conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS', user= 'giurato.fabrizio', password='xxx123##', database='giurato.fabrizio')


@app.route('/', methods=['GET'])     
def home():
    return render_template('app.component.html')





if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)