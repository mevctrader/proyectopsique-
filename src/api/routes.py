"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Posts, Tipo_Documento, Test_Respuesta, Topicos, Comentarios
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import verify_jwt_in_request
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

#create flask app
api = Blueprint('api', __name__)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST","PATCH"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    #if email != "test@gmail.com" or password != "test":
        #return jsonify({"msg": "Bad email or password"}), 401

    search = User.query.filter_by(email=email).one_or_none()

    if request.method == 'POST':
        if search != None and search.password==password:
            access_token = create_access_token(identity=email)
            return jsonify({"access_token":access_token, "user":search.serialize()}), 200
        else:
            return 'Las credenciales no coinciden', 404 
    elif request.method == 'PATCH':
        updated_passw = search.update(email,password)
        if(updated_passw != False):
            access_token = create_access_token(identity=email)
            return jsonify({"access_token":access_token, "user":updated_passw.serialize()}), 200
        else:
            return 'No se pudo actualizar el password', 500

@api.route("/token", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    #user = User.query.get(current_user_id)
    search = User.query.filter_by(email=current_user_id).one_or_none()
    
    return jsonify({"id": search.id, "user": search.serialize() }), 200

@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():
    email = get_jwt_identity()
    dictonary = {
        "message": "Hello world  Email: " + email
    }

    return jsonify(dictonary)


@api.route("/registro", methods=["POST"])
def registro_users():
    body = request.json
    if "tipo_documento_id" not in body:
        return 'Debe seleccionar el tipo de documento!', 400
    if "cedula" not in body:
        return 'Debe indicar el numero de cedula', 400
    if "pnombre" not in body:
        return 'Debe indicar el primer de nombre!', 400
    if "papellido" not in body:
        return 'Debe indicar el primer apellido', 400
    if "usuario" not in body:
        return 'Debe indicar el nombre del usuario', 400
    if "email" not in body:
        return 'Debe indicar el correo electronico!', 400
    if "password" not in body:
        return 'Debe indicar la contraseña', 400
    if "is_active" not in body:
        return 'Debe seleccionar el checkbox', 400
    else:
       
        new_row = User.new_registro_user(body["email"], body["password"], body["usuario"], body["pnombre"], body["papellido"],body["tipo_documento_id"], body["cedula"], body["is_active"])

        if new_row == None:
            return 'Un error ha ocurrido, upps!', 500
        else:
            return jsonify(new_row.serialize()), 200


@api.route("/foro", methods=["POST","GET"])
def registro_posts():
    if request.method == 'POST':
        bodyp = request.json
        if "titulo_post" not in bodyp:
            return 'Debe indicar el titulo del nuevo posts', 400
        if "descripcion_post" not in bodyp:
            return 'Debe indicar la descripcion del posts!', 400
        if "user_id" not in bodyp:
            return "Debe indicar el correo", 400
        if "topico_id" not in bodyp:
            return 'Debe seleccionar el topico!', 400
        else:
            new_row_post = Posts.new_registro_posts(bodyp["titulo_post"], bodyp["descripcion_post"], bodyp["user_id"], bodyp["topico_id"])

            if new_row_post == None:
                return 'Un error ha ocurrido, upps!', 500
            else:
                return jsonify(new_row_post.serialize()), 200
    elif request.method == 'GET':
        all_posts = Posts.query.all()
        return jsonify(
            [ posts.serialize() for posts in all_posts]
        ), 200

@api.route("/tipodocumento", methods=["GET"])
def get_tipodocument():
    all_tipodocument = Tipo_Documento.query.all()
    return jsonify(
        [ tp_documentos.serialize() for tp_documentos in all_tipodocument]
    ), 200

@api.route("/testpreguntas", methods=["GET"])
def get_tpreguntas():
    all_tpreguntas = Test_Respuesta.query.all()
    return jsonify(
        [ tpreguntas.serialize() for tpreguntas in all_tpreguntas]
    ), 200

@api.route("/topicos", methods=["GET"])
def get_topicos():
    all_topicos = Topicos.query.all()
    return jsonify(
        [ topicos.serialize() for topicos in all_topicos]
    ), 200
    
@api.route("/comentarios", methods=["POST","GET"])
def comentarios_p():
    if request.method == 'POST':
        body = request.json
        if "descripcion_comentarios" not in body:
            return 'Debe indicar la descripcion del comentario', 400
        if "post_id" not in body:
            return 'Debe indicar el id del posts!', 400
        if "user_id" not in body:
            return "Debe indicar el id del usuario", 400
        else:
            new_row_commentarios = Comentarios.new_registro_comm(body["descripcion_comentarios"], body["post_id"], body["user_id"])

            if new_row_commentarios == None:
                return 'Un error ha ocurrido, upps!', 500
            else:
                return jsonify(new_row_commentarios.serialize()), 200
    elif request.method == 'GET':
        all_commt = Comentarios.query.all()
        return jsonify(
            [ coment.serialize() for coment in all_commt]
        ), 200