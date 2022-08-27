import React, { useRef, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/app.css";

export const Login = () => {
	const userRef = useRef();
	const errRef = useRef();

	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let navigate = useNavigate();

	const [shown, setShown] = React.useState(false);
	const switchShown = () => setShown(!shown);

	const handleClick = (e) => {
		e.preventDefault();
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
               
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary">Ingresar</button>
              </div>
              <p className="forgot-password text-right mt-2">
                Olvidaste <a href="#">la Contraseña?</a>
              </p>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
