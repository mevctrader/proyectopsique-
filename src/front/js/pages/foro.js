import React from "react";
import Form from "react-bootstrap/Form";

const Foro = () => {
  return (
    <div className="d-flex flex-row">
      <div className="d-flex flex-row col-12">
        <div className="col-6 list-group justify-content w-25 p-5">
          <a className="list-group-item list-group-item-action disabled">Topicos</a>
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
        <div className="col-6">
          <Form>
            <Form.Group
              className="justify-content mt-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nueva Publicación</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <div>
                {" "}
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                >
                  Enviar
                </button>{" "}
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Foro;
