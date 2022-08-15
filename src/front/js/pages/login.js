import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		const opts={
			method: "POST",
			body: JSON.stringify({
				"email": email,
				"password": password,
			}),
			headers: {
				"Content-Type": "application/json"
			}
		};

		fetch(process.env.BACKEND_URL+'/api/token', opts)
			.then(resp => {
				if(resp.status==200) return resp.json();
				else alert("otro error en el servidor");
			})
			.then(data =>{
				console.log(data);
			})
			.catch(error => {
				console.log("error en el servidor: ", error)
			});
	}
	return (
		<div className="text-center">
			<h1>Login</h1>
			<div>
				<input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password"  placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button onClick={handleClick}>Entrar</button>
			</div>
		</div>
	);
};
