import React, {useState, useContext} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ChangePassword = ({isOpen, close, emails}) =>{
    const { store, actions } = useContext(Context);
	const [cbpassword, setCbpassword] = useState("");
    const [cbconfirmarpassword, setCbconfPassword] = useState("");

    const [shown, setShown] = React.useState(false);
	const switchShown = () => setShown(!shown);

    const [shownconfir, setShownconfir] = React.useState(false);
	const switchShownconfir = () => setShownconfir(!shownconfir);

    //const [isLoading, setIsLoading] = useState(false);

    const handleonclick = () => {
        //setIsLoading(true)
        if(!emails)
        {
            alert("Debe ingresar un email en el login y luego realice el cambio de contraseña.");
            return false;
        }
        actions.CambioPassw(emails,cbpassword);
        //setIsLoading(false)
	}

    return(
        <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title className="Auth-form-title">Recuperar Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
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
                                    <Form.Control value={cbconfirmarpassword} onChange={(e) => setCbconfPassword(e.target.value)} type={shownconfir ? 'text' : 'password'} placeholder=" Confirmar Password" />
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
            <Button variant="primary" onClick={handleonclick}>
                Actualizar Contraseña
            </Button>
        </Modal.Footer>
      </Modal>
    );
};