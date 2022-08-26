import React, { useRef, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from 'react-router-dom';

export const Login = () => 
{
	const userRef = useRef();
	const errRef = useRef();

	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [ErrMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState("");

	let navigate = useNavigate();

  	const handleClick = (e) => {
		e.preventDefault();
		actions.login(email,password);
	}

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [email, password]);

	if(store.token && store.token!="" && store.token != undefined) navigate('/');
	return (
		<>
			{ success ?
				(
					<section>
						<h1>
							You are logged in!
						</h1>
						<br/>
						<p>
							<a>Go to Home</a>
						</p>
					</section>
				) : (
					<section>
						<p ref={errRef} className={ErrMsg ? "errmsg" : "offscreen"} aria-live="assertive">
							{ErrMsg}
						</p>
						<h1>Login</h1>
						{
							store.token && store.token != "" && store.token != undefined ? (store.token) :
							(
								<form onSubmit={handleClick}>
							
									<label htmlFor="email">Email:</label>
									<input 
										type="text" 
										id="email"
										ref={userRef}
										autoComplete="off"
										placeholder="email" 
										value={email} 
										onChange={(e) => setEmail(e.target.value)} 
										requerid/>
									<label htmlFor="password">Password:</label>
									<input 
										type="password" 
										id="password"
										placeholder="contraseña" 
										value={password} 
										onChange={(e) => setPassword(e.target.value)} 
										requerid/>
									<button>Entrar</button>
								</form>
							)
						}
					</section>
				)
			}
			
		</>
	);
};
