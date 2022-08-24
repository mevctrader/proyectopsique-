import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carrusel } from "../component/carrusel";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

  return (
    <div className="text-center mt-5">
      <Carrusel />

      <div className="alert alert-info">
        {/*store.message ||
          "Loading message from the backend (make sure your python backend is running)..."*/}
        {store.message}
      </div>
      {/* <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p> */}
    </div>
  );
};
