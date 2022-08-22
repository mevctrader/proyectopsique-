import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogPost } from "../component/blogpost";
import { PostGroup4 } from "../component/Post Depresion/postdepresion1";

const Blog = () => {
  return (
    <div id="blog" className="row wrap m-0 container-fluid p-0">
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="general"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                General
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="depresion"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Depresión
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="ansiedad"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Ansiedad
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="otros"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Otros
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
          >
            <div id="feed" className="content">
              <div className="row"></div>
            </div>
          </div>
          <div
            className="tab-pane fade bg-secondary"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            <div
              id="feed-individual"
              className="row justify-content-center py-5 px-lg-3 px-5"
            ></div>
          </div>
        </div>
      </div>
      <h2>Información general</h2>
      <PostGroup4/>
      <h2>Información general</h2>
      <PostGroup4/>
      {/*
      <div className="col-lg-2 card mx-1 flex-grow-1 mb-3 p-0">
        <div className="title rounded-top">
          {" "}
          <h5 className="card-title px-2 pt-1">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="img-fluid"
          alt="..."
        />
        <div className="card-body rounded-bottom">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade bd-example-modal-lg"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <p className="h1 text-center">Write your post!</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-4 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 card mx-1 flex-grow-1 mb-3">
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            id="boton2"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p className="h1 text-center">La depresión y sus síntomas</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-4 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 card mx-1 flex-grow-1 mb-3">
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            id="boton2"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p className="h1 text-center">Write your post!</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-4 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 card mx-1 flex-grow-1 mb-3">
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            id="boton2"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p className="h1 text-center">Write your post!</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-4 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 flex-grow-1 card mx-1 mb-3 gx-5">
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            id="boton2"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p className="h1 text-center">Write your post!</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-4 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 flex-grow-1 card mx-1 mb-3 gx-5">
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            id="boton2"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p className="h1 text-center">Write your post!</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-4 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 flex-grow-1 card mx-1 mb-3 gx-5">
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            id="boton2"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p className="h1 text-center">Write your post!</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-4 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 card mx-1 flex-grow-1 mb-3 gx-5">
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender...{" "}
          </p>
          <button
            id="boton2"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Leer más
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <p className="h1 text-center">Write your post!</p>
                <hr></hr>
                <p className="px-2">
                  Es evidente que la depresion es una patologia muy presente hoy
                  en dia, miles de personas la padecen. En España se estima que
                  entre el 5 y el 10% de la poblacion podria tener depresion, es
                  decir, de 2 a 4 millones de personas, no obstante esta cifra
                  podria ascender...
                </p>
                <br></br>
                <hr></hr>
                <div className="row pe-3 mb-2 justify-content-end p">
                  <button
                    className="btn btn-primary w-auto col-44 mx-1"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Blog;