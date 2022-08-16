import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import {unstable_HistoryRouter } from "react-router-dom";
import psiqueImageUrl from "../../img/Psique1.png";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
		actions.login(email,password); /*.then(() => {
			history.push("/");
		})*/
	}

	//if(store.token && store.token !="" && store.token != undefined) history.push("/");

	return (
		<div className="text-center">
			<h1>Login</h1>
			{
				store.token && store.token!="" && store.token!=undefined ? (store.token) :
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
