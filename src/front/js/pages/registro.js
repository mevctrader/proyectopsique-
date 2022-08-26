import React, {useState, useContext} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
	const [snombre, setSnombre] = useState("");
    const [papellido, setPapellido] = useState("");
	const [sapellido, setSapellido] = useState("");
    const [genero, setGenero] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [confirmarpassword, setConfPassword] = useState("");

	let navigate = useNavigate();

    const handleClick = () => {
		actions.registro(identificacion,cedula,pnombre,snombre,papellido,sapellido,genero,usuario,email,password);
	}

    if(store.token && store.token!="" && store.token != undefined) navigate('/');

    return(
    <Form id="registro-div">
        <Container>
            <Row className="mb-3">
                <Form.Group as={Col}  sm={2} controlId="formGridIdentificacion">
                <Form.Label>Tipo de Documento:</Form.Label>
                <Form.Select value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} defaultValue="Seleccione...">
                    <option value={""}>SELECCIONE</option>
                    <option value={1}>VENEZOLANO</option>
                    <option value={2}>EXTRANJERO</option>
                    <option value={3}>PASAPORTE</option>
                    <option value={4}>JURIDICO</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridCedula">
                    <Form.Label>Cédula:</Form.Label>
                    <Form.Control value={cedula} onChange={(e) => setCedula(e.target.value)} type="text" placeholder="Enter Número de Cédula" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} sm={2} controlId="formGridPnombre">
                    <Form.Label>Primer Nombre</Form.Label>
                    <Form.Control value={pnombre} onChange={(e) => setPnombre(e.target.value)} type="text" placeholder="Enter Primer Nombre" />
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridSnombre">
                    <Form.Label>Segundo Nombre</Form.Label>
                    <Form.Control value={snombre} onChange={(e) => setSnombre(e.target.value)} type="text" placeholder="Enter Segundo Nombre" />
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridPapellido">
                    <Form.Label>Primer Apellido</Form.Label>
                    <Form.Control value={papellido} onChange={(e) => setPapellido(e.target.value)} type="text" placeholder="Enter Primero Apellido" />
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridSapellido">
                    <Form.Label>Segundo Apellido</Form.Label>
                    <Form.Control type="text" value={sapellido} onChange={(e) => setSapellido(e.target.value)} placeholder="Enter Segundo Apellido" />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} sm={2} controlId="formGridGenero">
                <Form.Label>Género:</Form.Label>
                <Form.Control type="text" value={genero} onChange={(e) => setGenero(e.target.value)} placeholder="Enter el Genero" />
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridUsuario">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Enter Usuario" />
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group as={Col} sm={2} controlId="formGridConfirPassword">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control value={confirmarpassword} onChange={(e) => setConfPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
            </Row>
            
            <Button variant="primary" onClick={handleClick}>
                Registrar Datos
            </Button>
        </Container>
    </Form>
    );
};