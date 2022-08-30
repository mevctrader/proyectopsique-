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

    const [shown, setShown] = React.useState(false);
	const switchShown = () => setShown(!shown);

    const [shownconfir, setShownconfir] = React.useState(false);
	const switchShownconfir = () => setShownconfir(!shownconfir);

    const handleClick = (e) => {
        e.preventDefault();
		actions.registro(identificacion,cedula,pnombre,papellido,usuario,email,password,checked);
	}

    if(store.token && store.token!="" && store.token != undefined) navigate('/');

    return(
        <div id="registro-web" className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registrarse</h3>
            <div className="form-group mt-3">
                <Row className="mb-3">
                <Form.Group as={Col}  sm={6} controlId="formGridIdentificacion">
                <Form.Label>Tipo de Documento:</Form.Label>
                <Form.Select defaultValue={identificacion} onChange={(e) => setIdentificacion(e.target.value)}>
                    <option value={""}>Seleccione</option>
                    <option value={1}>Venezolano</option>
                    <option value={2}>Extranjero</option>
                    <option value={3}>Jurídico</option>
                    <option value={4}>Pasaporte</option>
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
                        <Form.Control value={pnombre} onChange={(e) => setPnombre(e.target.value)} type="text" placeholder="Primer nombre" />
                    </Form.Group>

                    <Form.Group as={Col} sm={6} controlId="formGridPapellido">
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control value={papellido} onChange={(e) => setPapellido(e.target.value)} type="text" placeholder="Primer apellido" />
                    </Form.Group>

                </Row>
            </div>
            <div className="form-group mt-3">
                <Row className="mb-3">
                    <Form.Group as={Col} sm={6} controlId="formGridUsuario">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Ej: Tina03" />
                    </Form.Group>

                    <Form.Group as={Col} sm={6} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@ejemplo.com" />
                    </Form.Group>
                </Row>
            </div>
            <div className="form-group mt-3">
                <Row className="mb-3">
                    <Form.Group as={Col} sm={6} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <div className="input-group">
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type={shown ? 'text' : 'password'} placeholder="Contraseña" />
                            <div className="input-group-append">
                                <button id="show_password" className="btn btn-primary" type="button" onClick={switchShown}> <span className={shown ? 'fa fa-eye-slash' : 'fa fa-eye'}></span> </button>
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group as={Col} sm={6} controlId="formGridConfirPassword">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                            <div className="input-group">
                                <Form.Control value={confirmarpassword} onChange={(e) => setConfPassword(e.target.value)} type={shownconfir ? 'text' : 'password'} placeholder="Confirmar contraseña" />
                                <div className="input-group-append">
                                    <button id="show_password_conf" className="btn btn-primary" type="button" onClick={switchShownconfir} > <span className={shownconfir ? 'fa fa-eye-slash' : 'fa fa-eye'}></span> </button>
                                </div>
                            </div>
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