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
    <div className="container-fluid px-0">
      <div className="text-center row align-items-center text-dark">
        <Carrusel />
      </div>
    </div>
  );
};
