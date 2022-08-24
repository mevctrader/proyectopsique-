import React, { Component } from "react";
import psiqueImageUrl from "../../img/Psiento1.png";
import psiqueImageUrl1 from "../../img/psi2.png";
import psiqueImageUrl2 from "../../img/secondimg.jpg";
import psiqueImageUrl3 from "../../img/psi3.png";
import psiqueImageUrl4 from "../../img/psi5.png";

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;

export const Carrusel = () => (
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-bs-ride="false"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={psiqueImageUrl1}
          className="d-block mx-auto"
          alt="..."
          width={"auto"}
          height={"620px"}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>SALUD MENTAL</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src={psiqueImageUrl4}
          className="d-block mx-auto"
          alt="..."
          width={"auto"}
          height={"620px"}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>PSICOLOGÍA EN LÍNEA</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src={psiqueImageUrl3}
          className="d-block mx-auto"
          alt="..."
          width={"auto"}
          height={"620px"}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>AYUDAME</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
