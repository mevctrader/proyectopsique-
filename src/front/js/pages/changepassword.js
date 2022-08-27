import React, {useState, useContext} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//import { useNavigate } from 'react-router-dom';

export const ChangePassword = ( isOpen, close) =>{
    const { store, actions } = useContext(Context);
	const [cbpassword, setCbpassword] = useState("");
    const [cbconfirmarpassword, setCbconfPassword] = useState("");
	//let navigate = useNavigate();

    const [shown, setShown] = React.useState(false);
	const switchShown = () => setShown(!shown);

    const [shownconfir, setShownconfir] = React.useState(false);
	const switchShownconfir = () => setShownconfir(!shownconfir);

    const HandleSubmit = (e) => {
        e.preventDefault();
        alert("cambiando contraseña");
		/*actions.cambiopsw(cbpassword,cbconfirmarpassword);*/
	}

    return(
        <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title className="Auth-form-title">Cambiar Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={HandleSubmit}>
                <div className="form-group mt-3">
                    <Row className="mb-3">
                        <Form.Group as={Col} sm={6} controlId="formGridPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <div className="input-group">
                                <Form.Control value={cbpassword} onChange={(e) => setCbpassword(e.target.value)} type={shown ? 'text' : 'password'} placeholder="Password" />
                                <div className="input-group-append">
                                    <button id="show_password" className="btn btn-primary" type="button" onClick={switchShown}> <span className={shown ? 'fa fa-eye-slash' : 'fa fa-eye'}></span> </button>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} sm={6} controlId="formGridConfirPassword">
                            <Form.Label>Confirmar Contraseña</Form.Label>
                                <div className="input-group">
                                    <Form.Control value={cbconfirmarpassword} onChange={(e) => setCbconfPassword(e.target.value)} type={shownconfir ? 'text' : 'password'} placeholder="Password" />
                                    <div className="input-group-append">
                                        <button id="show_password_conf" className="btn btn-primary" type="button" onClick={switchShownconfir} > <span className={shownconfir ? 'fa fa-eye-slash' : 'fa fa-eye'}></span> </button>
                                    </div>
                                </div>
                        </Form.Group>
                    </Row>
                </div>
            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Cancelar
          </Button>
          <Button variant="primary" >
            Actualizar Contraseña
          </Button>
        </Modal.Footer>
      </Modal>
    );
};