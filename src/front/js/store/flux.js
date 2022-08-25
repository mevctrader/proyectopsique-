const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			syncTokenFromSessionStore: () =>{
				const token = sessionStorage.getItem("token");
				console.log("aplication just loaded session storage token");
				if(token && token !="" && token != undefined) setStore({ token: token});
 
			},
			logout: () =>{
				sessionStorage.removeItem("token");
				//console.log("Log out");
				setStore({ token: null});
 
			},
			login: async (email,password) => 
			{
				const opt={
					method: "POST",
					body: JSON.stringify({
						"email": email,
						"password": password,
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				//const baseurl = process.env.BACKEND_URL||"/api/token"; 
				//console.log(baseurl);
				try{
					const resp = await fetch('https://3001-mevctrader-proyectopsiq-k8f9n48xgjo.ws-us63.gitpod.io/api/token', opt)
					if(resp.status!==200) 
					{
						alert("Los datos ingresados no existen");
						return false;
					}
					const data = await resp.json();
					//console.log("This from backend:",data);
					sessionStorage.setItem("token",data.access_token);
					setStore({ token: data.access_token})
					return true;
				}
				catch(error){
					console.log("Ha habido un error al ingresar al login");
				}
			},
			registro: async (identificacion,cedula,pnombre,snombre,papellido,sapellido,genero,usuario,email,password,confirmarpassword) => 
			{
				const opt={
					method: "POST",
					body: JSON.stringify({
						"tipo_documento_id": identificacion,
						"cedula": cedula,
						"pnombre": pnombre,
						"snombre": snombre,
						"papellido": papellido,
						"sapellido": sapellido,
						"genero": genero,
						"usuario": usuario,
						"email": email,
						"password": password,
						"confirmarpassword": confirmarpassword,
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				//const baseurl = process.env.BACKEND_URL||"/api/token"; 
				//console.log(baseurl);
				try{
					const resp = await fetch('https://3001-mevctrader-proyectopsiq-k8f9n48xgjo.ws-us63.gitpod.io/api/registro', opt)
					if(resp.status!==200) 
					{
						alert("No se pudo registrar los datos");
						return false;
					}
					const data = await resp.json();

					console.log("This from backend:",data);
					//sessionStorage.setItem("token",data.access_token);
					//setStore({ token: data.access_token})
					return true;
				}
				catch(error){
					console.log("Ha habido un error al ingresar al login");
				}
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const store = getStore();
					const opts = {
						headers: {
							"Authorization": "Bearer " + store.token
						}
					}
					//const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const resp = await fetch("https://3001-mevctrader-proyectopsiq-in9xmx853ff.ws-us62.gitpod.io/api/hello", opts)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
