from flask import Flask, request, jsonify
import pandas as pd
import pymssql as sql
from flask_cors import CORS

from os import getenv
from dotenv import load_dotenv
load_dotenv()


conn = sql.connect(server='213.140.22.237\SQLEXPRESS', user= 'giurato.fabrizio', password='xxx123##', database='giurato.fabrizio')

app = Flask(__name__)
CORS(app)

angular_url = 'https://4200-mattiaottav-mondoallena-u4l9g4tbhth.ws-eu82.gitpod.io'

@app.route('/pandas/all')
def getall_pandas():

    data = request.args.get("allenatore")
    q = 'SELECT * FROM allenatore' 
    df = pd.read_sql(q, conn)

    res = list(df.to_dict("index").values())    # list(df.to_dict("index").values())

    return jsonify(res)


@app.route('/pandas/sch')
def getschemi_pandas():

    data = request.args.get("schemi")
    q = 'SELECT * FROM schemi' 
    df = pd.read_sql(q, conn)

    res1 = list(df.to_dict("index").values())    # list(df.to_dict("index").values())

    return jsonify(res1)
    

@app.route('/pandas/ruo')
def getruoli_pandas():

    data = request.args.get("ruolo")
    q = 'SELECT * FROM ruolo' 
    df = pd.read_sql(q, conn)

    res2 = list(df.to_dict("index").values())    # list(df.to_dict("index").values())

    return jsonify(res2)


@app.route('/pandas/ese')
def getese_pandas():

    data = request.args.get("esercizio")
    q = 'SELECT * FROM esercizio' 
    df = pd.read_sql(q, conn)

    res3 = list(df.to_dict("index").values())    # list(df.to_dict("index").values())

    return jsonify(res3)


@app.route('/a/<id>')
def getInfoAll_pandas(id):


    q = f"SELECT id FROM allenatore WHERE id = '{id}'"
    df = pd.read_sql(q,conn)
    res4 = list(df.to_dict("index").values())
    return jsonify(res4)



@app.route("/register/data", methods=["POST"])
def dati_registrazione():
  username = request.form["username"]
  email = request.form["email"]
  password = request.form["password"]
  Cq = "select * from user where username = %(username)s"
  Ccursor = conn.cursor(as_dict=True)
  Cp = {"username": f"{username}","email": f"{email}","password": f"{password}"}
  Ccursor.execute(Cq, Cp)
  Cdata = Ccursor.fetchall()
  if Cdata != []:
    return redirect(angular_url + '/register')
  else:
    q = 'insert into users (username, email, password) values (%(username)s,%(email)s,%(password)s)'
    cursor = conn.cursor(as_dict=True)
    p = {"username": f"{username}","email": f"{email}","password": f"{password}"}

    cursor.execute(q, p)
    conn.commit()
    return redirect(angular_url + '/login')

@app.route("/login/data", methods=["POST"])
def dati_login():
  email = request.form["email"]
  password = request.form["password"]
  q = "select * from spotify.users where email = %(email)s and password = %(password)s "
  cursor = conn.cursor(as_dict=True)
  p = {"email": f"{email}","password": f"{password}"}

  cursor.execute(q, p)
  data = cursor.fetchall()
  
  print(data)
  if data == []:
    return redirect(angular_url + '/login')
  else:
    return  jsonify(data) 

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)
