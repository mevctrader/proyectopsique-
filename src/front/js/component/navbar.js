import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import psiqueImageUrl from "../../img/Psiento1.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={psiqueImageUrl} alt="" width="140" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button id="buscar" className="btn rounded" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="menu" className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link id="menu-1" className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu-2" className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu-3" className="nav-link" to="/videos">
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu-4" className="nav-link" to="/foro">
                Foro
              </Link>
            </li>
            <li className="nav-item">
              <Link id="menu-5" className="nav-link" to="/test">
                Test
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a id="menu-7"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuario
              </a>
              <ul className="dropdown-menu">
                {!store.token ? (
                  <Link id="menu-6" to="/login">
                    <button className="btn btn-primary">Log in</button>
                  </Link>
                ) : (
                  <button
                    onClick={() => actions.logout()}
                    className="btn btn-primary"
                  >
                    Cerrar Sesión
                  </button>
                )}
                <li>
                  <a className="dropdown-item" href="#">
                    Registrarse
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};