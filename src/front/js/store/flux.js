const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      comentarios: null,
      consultapost: [],
      tipodocumento: [],
      topicos: [],
      user: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      MostrarTodosComentarios: async () =>{
        const store = getStore();
        const opt = {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token
          },
        };
          const baseurl = process.env.BACKEND_URL + "/api/comentarios";
  
          try 
          {
            const resp = await fetch(baseurl, opt);
            const data = await resp.json();
            console.log("todos comentarios", data)
            setStore({ comentarios: data});
            return true;
  
          } catch (error) {
          console.log("Hubo un error al consultar todos los comentarios");
          }

      },
      MostrarPosts: async() =>{
        const store = getStore();

        const opt = {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token
          },
        };
        const baseurl = process.env.BACKEND_URL + "/api/foro";
        try 
          {
            const resp = await fetch(baseurl, opt);
            const data = await resp.json();
            console.log("consulta posts ",data);
            setStore({ consultapost: data});
            return true;
  
          } catch (error) {
          console.log("Hubo un error al consultar los posts");
          }

      },
      MostrarTipoDocumentos: async () =>{
        const opt = {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
          },
        };
          const baseurl = process.env.BACKEND_URL + "/api/tipodocumento";
  
          try 
          {
            const resp = await fetch(baseurl, opt);
            const data = await resp.json();
            setStore({ tipodocumento: data});
            return true;
  
          } catch (error) {
          console.log("Hubo un error al consultar el tipo de documento");
          }
      },
      MostrarTopicos: async () => {
        const opt = {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
          },
        };
          const baseurl = process.env.BACKEND_URL + "/api/topicos";
  
          try 
          {
            const resp = await fetch(baseurl, opt);
            const data = await resp.json();
            setStore({ topicos: data});
            return true;
  
          } catch (error) {
          console.log("Hubo un error al consultar los topicos");
          }

      },
      syncTokenFromSessionStore: async () => {
        const token = sessionStorage.getItem("token");
		    const store = getStore();
        if (token && token != "" && token != undefined)
          setStore({ token: token});

        const opt = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + store.token,
          },
        };
        const baseurl = process.env.BACKEND_URL + "/api/token";

        try 
        {
          const resp = await fetch(baseurl, opt);
          const data = await resp.json();
          setStore({ user: data.user });
          return true;

        } catch (error) {
        console.log("Hubo un error al consultar al login");
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
        window.location = "/login";
      },
      login: async (email, password) => {
        const opt = {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const baseurl = process.env.BACKEND_URL + "/api/token";
        try {
          const resp = await fetch(baseurl, opt);

          if (resp.status === 404) {
            alert("Las credenciales no coinciden");
            window.location = "/";
            return false;
          }
          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token, user: data.user });
          return true;
        } catch (error) {
          console.log("Hubo un error al ingresar al login");
        }
      },
      registro: async (
        identificacion,
        cedula,
        pnombre,
        papellido,
        usuario,
        email,
        password,
        is_active
      ) => {
        const opt = {
          method: "POST",
          body: JSON.stringify({
            tipo_documento_id: identificacion,
            email: email,
            password: password,
            usuario: usuario,
            pnombre: pnombre,
            papellido: papellido,
            cedula: cedula,
            is_active: is_active,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };

        const baseurl = process.env.BACKEND_URL + "/api/registro";
        /*console.log(baseurl);*/

        try {
          const resp = await fetch(baseurl, opt);
          if (resp.status !== 200) {
            alert("No se pudo registrar los datos");
            return false;
          }
          const data = await resp.json();

          alert("los datos se guardaron con exito");
          window.location = "/login";

          return true;
        } catch (error) {
          console.log("Hubo un error al ingresar al login");
        }
      },
      CambioPassw: async (email, cbpassword) => {
        const opt = {
          method: "PATCH",
          body: JSON.stringify({
            email: email,
            password: cbpassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const baseurl = process.env.BACKEND_URL + "/api/token";
        //console.log(baseurl);
        try {
          const resp = await fetch(baseurl, opt);
          if (resp.status !== 200) {
            alert("No se pudo actualizar password");
            return false;
          }
          const data = await resp.json();

          alert("Se cambio el password con éxito.");
          window.location = "/login";

          return true;
        } catch (error) {
          console.log("Hubo un error al actualizar el password");
        }
      },
      RegistroPost: async (tituloPosts, descripcionPost,iduser, topicos) => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
        setStore({ token: token});
        const store = getStore();
        const opt = {
          method: "POST",
          body: JSON.stringify({
            titulo_post: tituloPosts,
            descripcion_post: descripcionPost,
            user_id: iduser,
            topico_id: topicos,
          }),
          headers: {
            Authorization: "Bearer " + store.token,
            "Content-Type": "application/json",
          },
        };

        const baseurl = process.env.BACKEND_URL + "/api/foro";
        /*console.log(baseurl);*/

        try {
          const resp = await fetch(baseurl, opt);
          if (resp.status !== 200) {
            alert("No se pudo registrar los datos");
            return false;
          }
          const data = await resp.json();
          alert("los datos se guardaron con exito");
          window.location = "/foro";

          return true;
        } catch (error) {
          console.log("Hubo un error al ingresar el posts");
        }
      },
      RegistroComentarios: async (comentarios,idposts,iduser) => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
        setStore({ token: token});
        const store = getStore();
        const opt = {
          method: "POST",
          body: JSON.stringify({
            descripcion_comentarios: comentarios,
            post_id: idposts,
            user_id: iduser
          }),
          headers: {
            Authorization: "Bearer " + store.token,
            "Content-Type": "application/json",
          },
        };

        const baseurl = process.env.BACKEND_URL + "/api/comentarios";
        /*console.log(baseurl);*/

        try {
          const resp = await fetch(baseurl, opt);
          if (resp.status !== 200) {
            alert("No se pudo registrar los datos");
            return false;
          }
          const data = await resp.json();
          alert("los datos se guardaron con exito");
          window.location = "/foro";

          return true;
        } catch (error) {
          console.log("Hubo un error al ingresar el comentario");
        }

      },
      getMessage: async () => {
        const baseurl = process.env.BACKEND_URL + "/api/hello";

        try {
          // fetching data from the backend
          const store = getStore();
          const opts = {
            headers: {
              Authorization: "Bearer " + store.token,
            },
          };
          //const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
          const resp = await fetch(baseurl, opts);
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
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
      },
    },
  };
};

export default getState;
