import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';

export const PostForoPrueba = () => {
    const { store, actions } = useContext(Context);

    return(
        <>
        {
            store.consultapost.map(elemento =>{
                return <Card border="success">
                <Card.Header>Tópicos: Ansiedd</Card.Header>
                <Card.Body>
                  <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                  <Card.Text>Descripción: Ayuda tengo demasiada ansiedad ojala salgamos bien help</Card.Text>
                  <Card.Link href="#">Leer Más</Card.Link>
                </Card.Body>
              </Card>
            })
        }
        </>
      
                
            )
}