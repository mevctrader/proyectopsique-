import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  return (
    <div className="display: flex flex-direction: row">
      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
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
            tabindex="-1"
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
                  podria ascender ...
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

      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender ...{" "}
          </p>
          <a href="#" className="btn btn-primary">
            Leer mas
          </a>
        </div>
      </div>

      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender ...{" "}
          </p>
          <a href="#" className="btn btn-primary">
            Leer mas
          </a>
        </div>
      </div>

      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender ...{" "}
          </p>
          <a href="#" className="btn btn-primary">
            Leer mas
          </a>
        </div>
      </div>

      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender ...{" "}
          </p>
          <a href="#" className="btn btn-primary">
            Leer mas
          </a>
        </div>
      </div>

      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender ...{" "}
          </p>
          <a href="#" className="btn btn-primary">
            Leer mas
          </a>
        </div>
      </div>

      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender ...{" "}
          </p>
          <a href="#" className="btn btn-primary">
            Leer mas
          </a>
        </div>
      </div>

      <div className="card mb-5 ms-3" style={{ width: "18rem" }}>
        <div>
          {" "}
          <h5 className="card-title">La depresion y sus sintomas</h5>{" "}
        </div>
        <img
          src="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {" "}
            Es evidente que la depresion es una patologia muy presente hoy en
            dia, miles de personas la padecen. En España se estima que entre el
            5 y el 10% de la poblacion podria tener depresion, es decir, de 2 a
            4 millones de personas, no obstante esta cifra podria ascender ...{" "}
          </p>
          <a href="#" className="btn btn-primary">
            Leer mas
          </a>
        </div>
      </div>
    </div>
  );
};
export default Blog;
