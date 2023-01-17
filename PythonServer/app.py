from flask import Flask, request, jsonify, redirect
import pandas as pd
import pymssql as sql
from flask_cors import CORS

from os import getenv
from dotenv import load_dotenv
load_dotenv()


conn = sql.connect(server='213.140.22.237\SQLEXPRESS', user= 'giurato.fabrizio', password='xxx123##', database='giurato.fabrizio')

app = Flask(__name__)
CORS(app)

angular_url = 'https://4200-mattiaottav-mondoallena-v94sm9ywzcv.ws-eu82.gitpod.io'


## Home Data 

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


@app.route('/a/<id>', methods=['GET'])
def getInfoAll_pandas(id):

    
    q = f"SELECT id FROM allenatore WHERE id = '{id}'"
    df = pd.read_sql(q,conn)
    res4 = list(df.to_dict("index").values())
    return jsonify(res4)

## Register 

@app.route("/register/data", methods=["POST"])
def dati_registrazione():
  username = request.args.get("name")
  email = request.args.get("email")
  password = request.args.get("password")

  Cq = "SELECT * FROM users WHERE username = %(username)s OR email = %(e)s"
  Ccursor = conn.cursor(as_dict=True)
  Cp = {"username": f"{username}","e": f"{email}"}
  Ccursor.execute(Cq, Cp)
  Cdata = Ccursor.fetchall()

  print(Cdata)

  if len(Cdata) < 1: # Se l'utente non esiste
    print(request.args)
    q = 'INSERT INTO users (username, email, password) VALUES (%(username)s, %(email)s, %(password)s)'
    cursor = conn.cursor(as_dict=True)
    p = {"username": f"{username}","email": f"{email}","password": f"{password}"}

    cursor.execute(q, p)
    conn.commit()
    return jsonify({'data': 'Ok!', 'url': 'login'})
  else:
    return jsonify({'data': 'User already exists!', 'url': None})


    

@app.route("/login/data", methods=["POST"])
def dati_login():
  email = request.args["email"]
  password = request.args["password"]
  q = "select * from users where email = %(email)s and password = %(password)s "
  cursor = conn.cursor(as_dict=True)
  p = {"email": f"{email}","password": f"{password}"}

  cursor.execute(q, p)
  data = cursor.fetchall()
  
  print(data)
  if data == []:
    return jsonify({"data": "Errore"}) # redirect(angular_url + '/login')
  else:
    return jsonify(data) 

@app.route("/getallenatore", methods=["GET"])
def get_allenatore():
  allenatore_id = request.args.get('id')

  print(request.args)
  
  q = "SELECT * FROM allenatore WHERE id = %(id)s"
  cursor = conn.cursor(as_dict=True)
  p = {"id": allenatore_id}

  cursor.execute(q, p)
  data = cursor.fetchall()
  
  print(data)
  if len(data) < 1:
    return jsonify({"data": {}}) 
  else:
    return jsonify({"data": data}) 


@app.route("/getschema", methods=["GET"])
def get_schema():
  schema_id = request.args.get('id')

  print(request.args)
  
  q = "SELECT * FROM schema WHERE id = %(id)s"
  cursor = conn.cursor(as_dict=True)
  p = {"id": schema_id}

  cursor.execute(q, p)
  data = cursor.fetchall()
  
  print(data)
  if len(data) < 1:
    return jsonify({"data": {}}) 
  else:
    return jsonify({"data": data})
  

  
@app.route("/getruolo", methods=["GET"])
def get_ruolo():
  ruolo_id = request.args.get('id')

  print(request.args)
  
  q = "SELECT * FROM ruolo WHERE id = %(id)s"
  cursor = conn.cursor(as_dict=True)
  p = {"id": ruolo_id}

  cursor.execute(q, p)
  data = cursor.fetchall()
  
  print(data)
  if len(data) < 1:
    return jsonify({"data": {}}) 
  else:
    return jsonify({"data": data})



@app.route("/getesercizio", methods=["GET"])
def get_esercizio():
  esercizio_id = request.args.get('id')

  print(request.args)
  
  q = "SELECT * FROM esercizio WHERE id = %(id)s"
  cursor = conn.cursor(as_dict=True)
  p = {"id": esercizio_id}

  cursor.execute(q, p)
  data = cursor.fetchall()
  
  print(data)
  if len(data) < 1:
    return jsonify({"data": {}}) 
  else:
    return jsonify({"data": data})



  ## BACKEND

@app.route('/backend/data', methods=['GET'])
def backend():
  nome = request.args.get("nome")
  cognome = request.args.get("cognome")
  squadra = request.args.get("squadra")

  Cq = "SELECT * FROM allenatore WHERE nome = %(nome)s AND cognome = %(cognome)s AND squadra = %(squadra)s"
  Ccursor = conn.cursor(as_dict=True)
  Cp = {"nome": f"{nome}","c": f"{cognome}", "squadra": f"{squadra}"}
  Ccursor.execute(Cq, Cp)
  Cdata = Ccursor.fetchall()

  print(Cdata)

  if len(Cdata) < 1: # Se l'utente non esiste
    print(request.args)
    q = 'INSERT INTO users (username, email, password) VALUES (%(username)s, %(email)s, %(password)s)'
    cursor = conn.cursor(as_dict=True)
    p = {"nome": f"{nome}","cognome": f"{cognome}","squadra": f"{squadra}"}

    cursor.execute(q, p)
    conn.commit()


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)
