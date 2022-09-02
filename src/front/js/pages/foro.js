import React, { useState, useContext } from "react";
import { ModalNuevoPost } from "../component/nuevoPost";
import Card from "react-bootstrap/Card";
import { Context } from "../store/appContext";
import Badge from "react-bootstrap/Badge";

const Foro = () => {
  const { store, actions } = useContext(Context);
  /*const [comentarios, setComentatios] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);*/

  //const usuarios=store.todosuser && store.todosuser.nombre_usuario

  /*const handleclick = (e) =>{
    e.preventDefault();

    const iduser=store.user && store.user.id
    const idposts=store.consultapost && store.consultapost.id

		actions.RegistroComentarios(comentarios,idposts,iduser);

  }*/


  return (
    <div id="foro-div" className="container-fluid row p-0 m-0">
      <div className="col-sm-2 bg-info">
        <div
          id="foro-div"
          className="container-fluid row p-0 m-0"
        >
      <div className="col-sm-3 col-lg-2">
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
      <div className="col-sm-10 row p-0 m-0">
        <>
          {
            store.consultapost.map((elemento) => {
              return (
                <div className="col-md-3 py-2">
                  <Card>
                    <Card.Header>
                      Tópico: {elemento.topicos.nombre_tema}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Titulo: {elemento.titulo_post}</Card.Title>
                      <Card.Text>
                        {elemento.descripcion_post}...{" "}
                        <Card.Link href="#">más</Card.Link>
                      </Card.Text>
                      Ver{" "}
                      <Card.Link href="#">
                        <Badge bg="secondary">0</Badge>
                      </Card.Link>{" "}
                      Comentarios..
                      <Card.Text>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
            }
        </>

      </div>
    </div>
  );
};

export default Foro;
