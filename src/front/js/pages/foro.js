import React from "react";
import Form from 'react-bootstrap/Form';

const Foro = () => {
  return <div>
  <div className="list-group justify-content w-25 p-5 mw-100 display-flex-row">
  <a class="list-group-item list-group-item-action disabled">Topicos</a>
<a href="#" className="list-group-item list-group-item-action">#General</a>
<a href="#" className="list-group-item list-group-item-action">#Ansiedad</a>
<a href="#" className="list-group-item list-group-item-action">#Estres</a>
<a href="#" className="list-group-item list-group-item-action">#Depresión</a>
<a href="#" className="list-group-item list-group-item-action">#AYUDAME</a>
</div>
<div>
<Form>
<Form.Group className=" w-50 p-5 mb-2  " controlId="exampleForm.ControlInput1">
        <Form.Label>Nueva Publicacion</Form.Label>
        <Form.Control type="email" placeholder="texto" />

       <div> <button type="button" className="btn btn-primary mt-3">Enviar</button>

       </div>
      </Form.Group>
      <Form.Group className="justify-content w-50 p-5 mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
</div>;
};




export default Foro;
