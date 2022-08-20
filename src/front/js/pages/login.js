import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from 'react-router-dom';

export const Login = () => 
{
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let navigate = useNavigate();

  	const handleClick = () => {
		actions.login(email,password).then(() => {
			navigate('/');
		})
	}

	return (
		<div className="text-center">
			<h1>Login</h1>
			{
				store.token && store.token!="" && store.token!=undefined ? ("ha iniciado") :
				(
					<div>
						<input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
						<input type="password"  placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						<button onClick={handleClick}>Entrar</button>
					</div>
				)
			}
		</div>
	);
};
