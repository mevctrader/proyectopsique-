import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { ComentarioIndividual } from "./comentarioInd";
import Card from 'react-bootstrap/Card';

export const PostForo = () => {
    const { store, actions } = useContext(Context);

    return(
        <>
        {
            store.consultapost.map(elemento =>{
                return <Card border="success" style={{ width: '18rem' }}>
                    <Card.Header>Tópicos: {elemento.topicos.nombre_tema}</Card.Header>
                    <Card.Body>
                    <Card.Title>Titulo: {elemento.titulo_post}</Card.Title>
                    <Card.Text>Descripción: {elemento.descripcion_post}</Card.Text>
                    <Card.Link href="#">Leer Más</Card.Link>
                    </Card.Body>
                </Card>
            })
        }
        </>
      
                /*
                <div>
                    <div id="" className="bg-warning">
                        <div>
                            <h2>Titulo del Post</h2>
                        </div>
                        <div>
                            <p>Texto del post</p>
                        </div>
                        <div>
                            <p className="p-0 m-0">Topico del post</p>
                        </div>
                    </div>
                    <div className="bg-info">
                        <div>
                            <h4>Nuevo comentario:</h4>
                        </div>
                        <div className="row px-3">
                            <textarea placeholder="Escribe tu comentario aquí" className="col-12"></textarea>
                        </div>
                        <div className="py-1 px-3 row justify-content-end">
                            <button type="submit" className="btn btn-primary col-auto">Send</button>
                        </div>
                    </div>
                    <div className="bg-success">
                        <div className="px-1">
                            <p>Comentarios:</p>
                            <p>Numero de comentario, ej: 10 mil comentarios</p>
                        </div>
                        <div className="bg-primary px-1">
                            <ComentarioIndividual/>
                        </div>
                        <div className="bg-info px-1">
                            <ComentarioIndividual/>
                        </div>
                        <div className="bg-danger px-1">
                            <ComentarioIndividual/>
                        </div>
                    </div>
                </div> */   
            )
}