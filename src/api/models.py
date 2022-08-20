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

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    pnombre = db.Column(db.String(20), nullable=False)
    snombre = db.Column(db.String(20), nullable=True)
    papellido = db.Column(db.String(20), nullable=False)
    sapellido = db.Column(db.String(20), nullable=True)
    identificacion_id = db.Column(db.Integer, db.ForeignKey('identificacion.id'))
    identificacions = db.relationship("Identificacion")
    cedula = db.Column(db.Integer, nullable=False)
    genero_id = db.Column(db.Integer, db.ForeignKey('genero.id'))
    generos = db.relationship("Genero")
    fecha_registro = db.Column(db.DateTime(), nullable=False , unique=True)
    is_active = db.Column(db.Boolean, unique=False, nullable=False) 

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "pnombre": self.pnombre,
            "snombre": self.snombre,
            "papellido": self.papellido,
            "sapellido": self.sapellido,
            "identificacion_id": self.identificacion_id,
            "genero_id": self.genero_id,
            # do not serialize the password, its a security breach
        }

class Identificacion(db.Model):
    __tablename__ = 'identificacion'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(20), unique=True, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "name_identif": self.name,
            # do not serialize the password, its a security breach
        }

class Genero(db.Model):
    __tablename__ = 'genero'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(10), unique=True, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "name_gn": self.name,
            # do not serialize the password, its a security breach
        }

class Test_Pregunta(db.Model):
    __tablename__ = 'test_pregunta'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(250), unique=True, nullable=True)
    def serialize(self):
        return {
            "id": self.id,
            "name_pg": self.name,
            # do not serialize the password, its a security breach
        }

class Test_Respuesta(db.Model):
    __tablename__ = 'test_respuesta'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(50), nullable=False)
    name = db.Column(db.Boolean, unique=True, nullable=True)
    testp_id = db.Column(db.Integer, db.ForeignKey('test_pregunta.id'))
    testps = db.relationship("Test_Pregunta")
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    users = db.relationship("User")
    fecha_registro = db.Column(db.DateTime(), nullable=False , unique=True)

    def serialize(self):
        return {
            "id": self.id,
            "name_rp": self.name,
            "testp_id": self.testp_id,
            # do not serialize the password, its a security breach
        }

class Foros(db.Model):
    __tablename__ = 'foros'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(250), unique=True, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    users = db.relationship("User")
    fecha_registro = db.Column(db.DateTime(), nullable=False , unique=True)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
## Draw from SQLAlchemy base
#try:
    #result = render_er(Base, 'diagram.png')
    #print("Success! Check the diagram.png file")
#except Exception as e:
    #print("There was a problem genering the diagram")
    #raise e