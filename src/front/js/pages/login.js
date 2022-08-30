import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/app.css";
import { ChangePassword } from "./changepassword";
import { FormText } from "react-bootstrap";

export const Login = () => {

	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [errorMsgem, setErrormsgem] = useState("");
  const [errorMsgps, setErrormsgps] = useState("");

	let navigate = useNavigate();

	const [shown, setShown] = React.useState(false);
	const switchShown = () => setShown(!shown);

  const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] = React.useState(false);
  const openChangePasswordModal = () => setIsOpenChangePasswordModal(true);
  const closeChangePasswordModal = () => setIsOpenChangePasswordModal(false);


	const handleClick = (e) => {
		e.preventDefault();

    /*let isValid = true;

    if (!email) {
      e.preventDefault();
      isValid = false;
      setErrormsgem("Debe ingresar el email.");
      return
    }
    else
    {
      setErrormsgem("");

    }

    if (typeof email !== "undefined") {
          
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        isValid = false;
        setErrormsgem("Debe ingresar un email válido....")
      }
    }

    if (!password) {
      isValid = false;
      setErrormsgps("Debe ingresar el password.")
      return
    }*/

		actions.login(email, password);
	};

  if (store.token && store.token != "" && store.token != undefined)navigate("/");
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleClick}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Acceso</h3>
          {store.token && store.token != "" && store.token != undefined ? (
            store.token
          ) : (
            <>
              <div className="form-group mt-3">
                <label>Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control mt-1"
                  placeholder="Introduce el correo electrónico"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="text-danger">{errorMsgem}</div>
              </div>
              <div className="form-group mt-3">
                <label>Clave:</label>
                <div className="input-group">
                  <input
                  type={shown ? 'text' : 'password'}
                  id="password"
                  className="form-control mt-1"
                  placeholder="Introduce la contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                      <button id="show_password" className="btn btn-primary" type="button" onClick={switchShown}> <span className={shown ? 'fa fa-eye-slash' : 'fa fa-eye'}></span> </button>
                  </div>
                </div>
                <FormText className="text-danger">{"\n"}{errorMsgps}</FormText>

              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary">Ingresar</button>
              </div>
              <p className="forgot-password text-right mt-2">
              Olvidaste la Contraseña? <a href="#" onClick={openChangePasswordModal}>Recupérala</a>
              </p>
              <ChangePassword 
                isOpen={isOpenChangePasswordModal}
                close={closeChangePasswordModal}
                emails={email}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};
