import React from "react";
import Form from "react-bootstrap/Form";

const Foro = () => {
  return (
    <div id="foro-div" className="container-fluid">
      <div id="boton-post" className="container-fluid justify-content w-30 p-5">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          NUEVO POST
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  NUEVO POST
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      TÓPICO:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">
                      MENSAJE:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row col-12">
        <div className="col-6 list-group justify-content w-25 p-5">
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
        <div className="col-6 list-group justify-content w-30 p-5 ">
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">PRIMERA PUBLICACIÓN</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1 cols-120">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <small className="text-muted justify-content-between p-5">
              #Ansiedad
            </small>
            <button type="button" className="btn btn-primary btn-sm">
              COMENTAR
            </button>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">SEGUNDA PUBLICACIÓN</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1 cols-120">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <small className="text-muted justify-content-between p-5">
              #Depresion
            </small>
            <button type="button" className="btn btn-primary btn-sm">
              COMENTAR
            </button>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">TERCERA PUBLICACIÓN</h5>
              <small className="text-muted ">3 days ago</small>
            </div>
            <p className="mb-1 cols-120">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <small className="text-muted justify-content-between p-5">
              #Estres
            </small>
            <button type="button" className="btn btn-primary btn-sm">
              COMENTAR
            </button>
          </a>
          {/* <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Foro;
