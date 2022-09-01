import React from "react";
import Form from "react-bootstrap/Form";
import { ModalNuevoPost } from "../component/nuevoPost";
import { PostForo } from "../component/postForo";
import { PostForoPrueba } from "../component/postForoPrueba";
import Card from "react-bootstrap/Card";

const Foro = () => {
  return (
    <div
      id="foro-div"
      className="container-fluid row p-0 m-0"
    >
      <div className="col-sm-3 col-lg-2 bg-info">
        <div className="col-auto p-3 text-center">
          <ModalNuevoPost />
        </div>
        <div className="col-auto list-group p-3">
          <a className="list-group-item list-group-item-action disabled">
            <strong>TÓPICOS</strong>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            #General
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            #Ansiedad
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            #Estres
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            #Depresión
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            #AYUDAME
          </a>
        </div>
      </div>
      <div className="col-sm-9 col-lg-10 row p-0 m-0">
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 py-2">
            <Card border="success">
              <Card.Header>Tópicos: Ansiedd</Card.Header>
              <Card.Body>
                <Card.Title>Titulo: Tengo ansiedad</Card.Title>
                <Card.Text>
                  Descripción: Ayuda tengo demasiada ansiedad ojala salgamos
                  bien help
                </Card.Text>
                <Card.Link href="#">Leer Más</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default Foro;
