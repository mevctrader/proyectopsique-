import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Depresion } from "../component/Post Depresion/postdepresion1";
import { General } from "../component/Post Depresion/general";
import { Ansiedad } from "../component/Post Depresion/ansiedad";
import { Otros } from "../component/Post Depresion/otros";

const Blog = () => {
  return (
    <div
      id="blog"
      className="row wrap m-0 container-fluid justify-content-center p-0"
    >
      <div className="row justify-content-center mt-3 px-2">
        <div className="col-auto">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active mx-2"
                id="general"
                data-bs-toggle="pill"
                data-bs-target="#pills-general"
                type="button"
                role="tab"
                aria-controls="pills-general"
                aria-selected="true"
              >
                General
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link mx-2"
                id="depresion"
                data-bs-toggle="pill"
                data-bs-target="#pills-depresion"
                type="button"
                role="tab"
                aria-controls="pills-depresion"
                aria-selected="false"
              >
                Depresión
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link mx-2"
                id="ansiedad"
                data-bs-toggle="pill"
                data-bs-target="#pills-ansiedad"
                type="button"
                role="tab"
                aria-controls="pills-ansiedad"
                aria-selected="false"
              >
                Ansiedad
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link mx-2"
                id="otros"
                data-bs-toggle="pill"
                data-bs-target="#pills-otro"
                type="button"
                role="tab"
                aria-controls="pills-otro"
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
            id="pills-general"
            role="tabpanel"
            aria-labelledby="pills-general-tab"
            tabIndex="0"
          >
            <div id="depresion" className="content">
              <div className="row">
                <h2>Trastornos de la Afectividad</h2>
                <General />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-depresion"
            role="tabpanel"
            aria-labelledby="pills-depresion-tab"
            tabIndex="0"
          >
            <div className="row">
              <h2>Depresion</h2>
              <Depresion />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-ansiedad"
            role="tabpanel"
            aria-labelledby="pills-ansiedad-tab"
            tabIndex="0"
          >
            <div className="row">
              <h2>Ansiedad</h2>
              <Ansiedad />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-otro"
            role="tabpanel"
            aria-labelledby="pills-otro-tab"
            tabIndex="0"
          >
            <div className="row">
              <h2>Otros</h2>
              <Otros />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
