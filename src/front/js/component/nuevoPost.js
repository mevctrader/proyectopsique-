import React from "react";

export const ModalNuevoPost = () => {
  return (
    <div id="boton-post" className="container-fluid justify-content w-30 p-3">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#nuevoPost"
        data-bs-whatever="@nuevoPost"
      >
        NUEVO POST
      </button>
      <div
        className="modal fade"
        id="nuevoPost"
        tabindex="-1"
        aria-labelledby="nuevoPostLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="nuevoPostLabel">
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
                  <input type="text" className="form-control" id="topico" />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    TÍTULO:
                  </label>
                  <input type="text" className="form-control" id="tituloPost" />
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
  );
};
