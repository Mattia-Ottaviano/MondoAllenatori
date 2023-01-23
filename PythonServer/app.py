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

angular_url = 'https://4200-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io'


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

  if len(Cdata) < 1:
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
  cursor = conn.cursor(as_dict=True)

  email = request.args.get("email")
  password = request.args.get("password")

  data = {
    'errore': "",
    'data': {}
  }

  q = "select * from users where email = %(email)s"
  p = {"email": f"{email}","password": f"{password}"}
  cursor.execute(q, p)
  res = cursor.fetchall()

  if len(res) > 0:
    if res[0]['password'] == password:
      data['data'] = res[0]
    else:
      data['errore'] = "Password sbagliata"
  else:
     data['errore'] = "L'utente non esiste"
  
  print(data)
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
    return jsonify({"data": data[0]}) 


@app.route("/getschema", methods=["GET"])
def get_schema():
  schema_id = request.args.get('id')

  print(request.args)
  
  q = "SELECT * FROM schemi WHERE id = %(id)s"
  cursor = conn.cursor(as_dict=True)
  p = {"id": schema_id}

  cursor.execute(q, p)
  data = cursor.fetchall()
  
  print(data)
  if len(data) < 1:
    return jsonify({"data": {}}) 
  else:
    return jsonify({"data": data[0]}) 


  
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
    return jsonify({"data": data[0]}) 




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
    return jsonify({"data": data[0]}) 



  ## BACKEND

@app.route('/backend', methods=['POST'])
def backend():
        if request.method == 'POST':
            nome = request.args.get('nome')
            cognome = request.args.get('cognome')
            squadra = request.args.get('squadra')

            #query
            cursor = conn.cursor(as_dict=True)
            q = 'INSERT INTO allenatore (nome,cognome,squadra) VALUES (%(nome)s, %(cognome)s, %(squadra)s)'
            cursor.execute(q, params={'nome': nome, 'cognome': cognome, 'squadra': squadra})
            conn.commit()
            return jsonify(request.args)


@app.route('/backendSch', methods=['POST'])
def backendSch():
        if request.method == 'POST':
            nome = request.args.get('nome')
            n_dif = request.args.get('n_dif')
            n_cen = request.args.get('n_cen')
            n_att = request.args.get('n_att')
            descr = request.args.get('descr')

            #query
            cursor = conn.cursor(as_dict=True)
            q = 'INSERT INTO schemi (nome,n_dif,n_cen,n_att,descr) VALUES (%(nome)s, %(n_dif)s, %(n_cen)s, %(n_att)s, %(descr)s)'
            cursor.execute(q, params={'nome': nome, 'n_dif': n_dif, 'n_cen': n_cen, 'n_att': n_att, 'descr': descr})
            conn.commit()
            return jsonify(request.args)


@app.route('/backendEse', methods=['POST'])
def backendEse():
        if request.method == 'POST':
            nome = request.args.get('nome')
            n_gioc = request.args.get('n_gioc')
            difficolta = request.args.get('difficolta')
            scopo = request.args.get('scopo')

            #query
            cursor = conn.cursor(as_dict=True)
            q = 'INSERT INTO esercizio (nome,n_gioc,difficolta,scopo) VALUES (%(nome)s, %(n_gioc)s, %(difficolta)s, %(scopo)s)'
            cursor.execute(q, params={'nome': nome, 'n_gioc': n_gioc, 'difficolta': difficolta, 'scopo': scopo})
            conn.commit()
            return jsonify(request.args)

@app.route('/backendRuo', methods=['POST'])
def backendRuo():
        if request.method == 'POST':
            nome = request.args.get('nome')
            caratteristiche = request.args.get('caratteristiche')
            esempi = request.args.get('esempi')
            zona = request.args.get('zona')

            #query
            cursor = conn.cursor(as_dict=True)
            q = 'INSERT INTO ruolo (nome,caratteristiche,esempi,zona) VALUES (%(nome)s, %(caratteristiche)s, %(esempi)s, %(zona)s)'
            cursor.execute(q, params={'nome': nome, 'caratteristiche': caratteristiche, 'esempi': esempi, 'zona': zona})
            conn.commit()
            return jsonify(request.args)
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)
