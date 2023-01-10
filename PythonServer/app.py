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



@app.route('/pandas/all')
def getall_pandas():

    data = request.args.get("allenatore")
    q = 'SELECT * FROM allenatore' 
    df = pd.read_sql(q, conn)

    res = list(df.to_dict("index").values())    # list(df.to_dict("index").values())

    return jsonify(res)


@app.route('/pandas/schemi')
def getschemi_pandas():

    data = request.args.get("schemi")
    q = 'SELECT * FROM schemi' 
    df = pd.read_sql(q, conn)

    res1 = list(df.to_dict("index").values())    # list(df.to_dict("index").values())

    return jsonify(res1)
    



''' @app.route('/logreg', methods=['POST'])     
def login():
    user = request.form.get('user')
    pwd = request.form.get('pwd')
    data = {"user": user , "pwd" : pwd }
    return jsonify(data)

@app.route('/esercizio', methods=['GET'])     
def es():
    query= "select nome, n_gioc, difficolta, scopo FROM esercizio"
    query_nome= "SELECT nome FROM esercizio"
    query_ngioc= "SELECT n_gioc FROM esercizio"
    query_difficolta= "SELECT difficolta FROM esercizio"
    query_scopo= "SELECT scopo FROM esercizio"

    tabella = pd.read_sql(query,conn)
    tabella_nome = pd.read_sql(query_nome,conn)
    tabella_ngioc = pd.read_sql(query_ngioc,conn)
    tabella_difficolta = pd.read_sql(query_difficolta,conn)
    tabella_scopo = pd.read_sql(query_scopo,conn)
    return render_template('app.component.html')



@app.route('/schema', methods=['GET'])     
def sch():
    query= "SELECT nome, n_dif, n_cen, n_att, descr FROM schema"
    query_ndif= "SELECT n_dif FROM schema"
    query_ncen= "SELECT n_cen FROM schema"
    query_natt= "SELECT n_att FROM schema"
    query_descr= "SELECT descr FROM schema"
    query_nome= "SELECT nome FROM schema"

    
    tabella = pd.read_sql(query,conn)
    tabella_nome = pd.read_sql(query_nome,conn)
    tabella_ndif = pd.read_sql(query_ndif,conn)
    tabella_ncen = pd.read_sql(query_ncen,conn)
    tabella_natt = pd.read_sql(query_natt,conn)
    tabella_descr = pd.read_sql(query_descr,conn)
    return render_template('app.component.html')

@app.route('/ruolo', methods=['GET'])     
def ruo():
    query= "SELECT nome, caratteristiche, esempi, zona FROM ruolo"
    query_nome= "SELECT nome FROM ruolo"
    query_caratteristiche= "SELECT caratteristiche FROM ruolo"
    query_esempi= "SELECT esempi FROM ruolo"
    query_zona= "SELECT zona FROM ruolo"

    tabella = pd.read_sql(query,conn)
    tabella_nome = pd.read_sql(query_nome,conn)
    tabella_caratteristiche = pd.read_sql(query_caratteristiche,conn)
    tabella_esempi = pd.read_sql(query_esempi,conn)
    tabella_zona = pd.read_sql(query_zona,conn)

    return render_template('app.component.html')

'''
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)
