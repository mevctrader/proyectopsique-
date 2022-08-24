import os
import sys
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, Numeric, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
#from eralchemy import render_er

db = SQLAlchemy()
Base = declarative_base()

class Identificacion(db.Model):
    __tablename__ = 'identificacion'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "name_identif": self.name,
        }

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre_usuario = db.Column(db.String(20), unique=False, nullable=False)
    pnombre = db.Column(db.String(20), nullable=False)
    snombre = db.Column(db.String(20), nullable=True)
    papellido = db.Column(db.String(20), nullable=False)
    sapellido = db.Column(db.String(20), nullable=True)
    identificacion_id = db.Column(db.Integer, db.ForeignKey('identificacion.id'))
    identificacions = db.relationship("Identificacion")
    cedula = db.Column(db.Integer, nullable=False)
    genero_id = db.Column(db.String(30), nullable=False)
    fecha_registro = db.Column(db.DateTime(), nullable=False , unique=True)
    roles = db.Column(db.String(20), unique=False, nullable=False) 
    is_active = db.Column(db.Boolean, unique=False, nullable=False) 

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre_usuario": self.nombre_usuario,
            "pnombre": self.pnombre,
            "snombre": self.snombre,
            "papellido": self.papellido,
            "sapellido": self.sapellido,
            "identificacion_id": self.identificacion_id,
            "genero": self.genero_id,
            "roles": self.roles,
            # do not serialize the password, its a security breach
        }

class Test_Pregunta(db.Model):
    __tablename__ = 'test_pregunta'
    id = db.Column(db.Integer, primary_key=True)
    preguntas = db.Column(db.String(250), unique=True, nullable=False)
    def serialize(self):
        return {
            "id": self.id,
            "preguntas": self.preguntas,
        }

class Test_Respuesta(db.Model):
    __tablename__ = 'test_respuesta'
    id = db.Column(db.Integer, primary_key=True)
    respuesta = db.Column(db.String(2), nullable=False)
    testp_id = db.Column(db.Integer, db.ForeignKey('test_pregunta.id'), nullable=False)
    testps = db.relationship("Test_Pregunta")
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    users = db.relationship("User")
    fecha_registro = db.Column(db.DateTime(), nullable=False , unique=True)

    def serialize(self):
        return {
            "id": self.id,
            "name_rp": self.respuesta,
            "testp_id": self.testp_id,
        }

class Topicos(db.Model):
    __tablename__ = 'topicos'
    id = db.Column(db.Integer, primary_key=True)
    nombre_tema = db.Column(db.String(250), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre_tema": self.nombre_tema,
        }

class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    titulo_post = db.Column(db.String(50), unique=True, nullable=False)
    descripcion_post = db.Column(db.String(250), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    users = db.relationship("User")
    topico_id = db.Column(db.Integer, db.ForeignKey('topicos.id'), nullable=False)
    topicos = db.relationship("Topicos")
    fecha_registro = db.Column(db.DateTime(), nullable=False , unique=True)

    def serialize(self):
        return {
            "id": self.id,
            "titulo_post": self.titulo_post,
            "descripcion_post": self.descripcion_post,
            "topico_id": self.topico_id,
            "user_id": self.user_id,
        }

class Comentarios(db.Model):
    __tablename__ = 'comentarios'
    id = db.Column(db.Integer, primary_key=True)
    descripcion_comentarios = db.Column(db.String(250), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)
    posts = db.relationship("Post")
    fecha_registro = db.Column(db.DateTime(), nullable=False , unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    users = db.relationship("User")

    def serialize(self):
        return {
            "id": self.id,
            "descripcion_comentarios": self.descripcion_comentarios,
            "post_id": self.post_id,
            "user_id": self.user_id
        }
## Draw from SQLAlchemy base
#try:
    #result = render_er(Base, 'diagram.png')
    #print("Success! Check the diagram.png file")
#except Exception as e:
    #print("There was a problem genering the diagram")
    #raise e