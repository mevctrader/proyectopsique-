import React from "react";
import Form from "react-bootstrap/Form";
import { ModalNuevoPost } from "../component/nuevoPost";
import { PostForo } from "../component/postForo";

const Foro = () => {
  return (
    <div id="foro-div" className="container-fluid">
      <ModalNuevoPost />
      <div className="d-flex flex-row col-12">
        <div className="col-6 list-group justify-content w-25 p-3">
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
        <div className="col-6 list-group justify-content w-20 p-3 ">
          <div>
            <PostForo/>
          </div>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">PRIMERA PUBLICACIÓN</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <small className="text-muted justify-content-between p-5">
              #Ansiedad
            </small>
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
          </a>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#comentarios"
            data-bs-whatever="@comentarios"
          >
            COMENTAR
          </button>
          <div
            className="modal fade"
            id="comentarios"
            tabindex="-1"
            aria-labelledby="comentarios"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="comentarios">
                    NUEVO COMENTARIO
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
                        TÍTULO DEL POST
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="message-text" className="col-form-label">
                        COMENTARIO:
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
                    Enviar Comentario
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foro;
