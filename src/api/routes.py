"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

#create flask app
api = Blueprint('api', __name__)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():
    email = get_jwt_identity()
    dictonary = {
        "message": "Hello world  Email: " + email
    }

    return jsonify(dictonary)


@api.route("/registro", methods=["POST"])
def registro_post():
    body = request.json
    if "autor" not in body:
        return 'No tiene autor!', 400
    if "nombre" not in body:
        return 'No tiene nombre', 400
    else:
        new_row = Diario.new_diary(body["nombre"], body["autor"])
        if new_row == None:
            return 'Un error ha ocurrido, upps!', 500
        else:
            return jsonify(new_row.serialize()), 200

