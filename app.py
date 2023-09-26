import pyodbc
#Conexão com meu Banco de Dados 
dados_conexao = (
    "Driver={SQL Server};"
    "Server=DESKTOP-Q3JLRD9\SQLSERVER2023;"
    "Database=Bsm_Construcoes;"
)



conexao = pyodbc.connect(dados_conexao)
print('conexao realizada com sucesso')

cursor = conexao.cursor()
# Fechar a conexão com o banco de dados
conexao.close()



# -*- coding: UTF-8 -*-
from flask import Flask, abort, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

funcionarios = []

# API tem rotas - Endpoints - Pontos de acesso
# GET 
# POST
# PUT
# DELETE

# Verbos HTTP
# REST - RESTFull

# CRUD (Create, Read, Update, Delete)
# C - POST
# R - GET
# U - PUT
# D - DELETE

# GET http://ti360experience.tech/alunos
# POST http://ti360experience.tech/alunos
# PUT http://ti360experience.tech/alunos/1

# tabela de alunos
# id | nome | pix | profissao | tiposerviço | metragem
# GET - /alunos - Lista todos os funcionarios

@app.route("/")
def inicio():
    return jsonify({"message": "Cadastro de duncionarios Bsm_Construtora"})


@app.route("/funcionario", methods=["POST"])
def cadastrar_funcionario():
    dados = request.get_json()

    dados["id"] = len(funcionarios) + 1

    funcionarios.append(dados)

    return jsonify(dados), 201

@app.route("/funcionario/<int:id>", methods=["GET"])
def detalhe_funcionario(id):
    for funcionario in funcionarios:
        if funcionario['id'] == id:
            return jsonify(funcionario)

    return abort(404)

@app.route("/funcionario/<int:id>", methods=["PUT"])
def atualizar_aluno(id):
    for funcionario in funcionarios:
        if funcionario['id'] == id:
            dados = request.get_json()
            funcionario["nome"] = dados["nome"]
            funcionario["pix"] = dados["pix"]
            funcionario["profissao"] = dados["profissao"]
            funcionario["tiposervico"] = dados["tiposervico"]
            funcionario["metragem"] = dados["metragem"]

            return jsonify(funcionario)

    return abort(404)

@app.route("/funcionario/<int:id>", methods=["DELETE"])
def deletar_funcionario(id):
    for funcionario in funcionarios:
        if funcionario['id'] == id:
            funcionarios.remove(funcionario)

            return jsonify(funcionarios)

    return abort(404)

@app.route("/funcionario", methods=["GET", "PATCH", "PUT"])
def listar_funcionarios():
    return jsonify(funcionarios)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)


