import React, { useRef, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/app.css"

export const Login = () => 
{
	const userRef = useRef();
	const errRef = useRef();
	
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let navigate = useNavigate();

  	const handleClick = (e) => {
		e.preventDefault();
		actions.login(email,password);
	}

	
	if(store.token && store.token!="" && store.token != undefined) navigate('/');
	return (
		<div className="Auth-form-container">
			<form className="Auth-form" onSubmit={handleClick}>
				<div className="Auth-form-content">
				<h3 className="Auth-form-title">Login</h3>
					{
						store.token && store.token != "" && store.token != undefined ? (store.token) :
						(
							<>

							<div className="form-group mt-3">
								<label>Email:</label>
								<input
								type="email"
								id="email"
								className="form-control mt-1"
								placeholder="Enter email"
								autoComplete="off"
								value={email} 
								onChange={(e) => setEmail(e.target.value)} 
								/>
							</div>
							<div className="form-group mt-3">
								<label>Password:</label>
								<input
								type="password"
								id="password"
								className="form-control mt-1"
								placeholder="Enter password"
								value={password} 
								onChange={(e) => setPassword(e.target.value)} 
								/>
							</div>
							<div className="d-grid gap-2 mt-3">
								<button className="btn btn-primary">
								Ingresar
								</button>
							</div>
							<p className="forgot-password text-right mt-2">
								Forgot <a href="#">password?</a>
							</p>
							</>

						)
					}	
				</div>
			</form>
		</div>
		
	);
};
