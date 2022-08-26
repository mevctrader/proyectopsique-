import React, {useState, useContext} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

export const Registro = () =>{
    const { store, actions } = useContext(Context);
    const [identificacion, setIdentificacion] = useState("");
	const [cedula, setCedula] = useState("");
    const [pnombre, setPnombre] = useState("");
    const [papellido, setPapellido] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [confirmarpassword, setConfPassword] = useState("");
    const [checked, setChecked] = React.useState(1);

	let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
		actions.registro(identificacion,cedula,pnombre,papellido,usuario,email,password,checked);
	}

    if(store.token && store.token!="" && store.token != undefined) navigate('/');

    return(
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registrarse</h3>
            <div className="form-group mt-3">
                <Row className="mb-3">
                <Form.Group as={Col}  sm={6} controlId="formGridIdentificacion">
                <Form.Label>Tipo de Documento:</Form.Label>
                <Form.Select value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} defaultValue="Seleccione...">
                    <option value={""}>SELECCIONE</option>
                    <option value={1}>VENEZOLANO</option>
                    <option value={2}>EXTRANJERO</option>
                    <option value={3}>PASAPORTE</option>
                    <option value={4}>JURIDICO</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} sm={5} controlId="formGridCedula">
                    <Form.Label>Cédula:</Form.Label>
                    <Form.Control value={cedula} onChange={(e) => setCedula(e.target.value)} type="text" placeholder="Número de Cédula" />
                </Form.Group>
                </Row>
            </div>
            <div className="form-group mt-3">
                <Row className="mb-3">
                    <Form.Group as={Col} sm={6} controlId="formGridPnombre">
                        <Form.Label>Primer Nombre</Form.Label>
                        <Form.Control value={pnombre} onChange={(e) => setPnombre(e.target.value)} type="text" placeholder="Primer Nombre" />
                    </Form.Group>

                    <Form.Group as={Col} sm={6} controlId="formGridPapellido">
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control value={papellido} onChange={(e) => setPapellido(e.target.value)} type="text" placeholder="Primero Apellido" />
                    </Form.Group>

                </Row>
            </div>
            <div className="form-group mt-3">
                <Row className="mb-3">
                    <Form.Group as={Col} sm={6} controlId="formGridUsuario">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Enter Usuario" />
                    </Form.Group>

                    <Form.Group as={Col} sm={6} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
            </div>
            <div className="form-group mt-3">
                <Row className="mb-3">
                    <Form.Group as={Col} sm={6} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group as={Col} sm={6} controlId="formGridConfirPassword">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control value={confirmarpassword} onChange={(e) => setConfPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
            </div>
            <div className="form-group mt-3">
                <input type="checkbox" value={checked} checked={checked} onChange={(e) => setChecked(e.target.value)} />
                &nbsp;
                <span>Activo</span>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={handleClick}>
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};