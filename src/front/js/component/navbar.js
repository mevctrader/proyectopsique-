import React from "react";
import { Link } from "react-router-dom";
import psiqueImageUrl from "../../img/Psique2.png";

export const Navbar = () => {
  return (
    //    <nav className="navbar navbar-light bg-light">
    //      <div className="container">
    //        <Link to="/">
    //          <img className="navbar-brand mb-0 h1" src={psiqueImageUrl} />
    //       </Link>
    //        <div className="ml-auto">
    //          <Link to="/demo">
    //            <button className="btn btn-primary">
    //              Check the Context in action
    //            </button>
    //          </Link>
    //        </div>
    //      </div>
    //    </nav>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid row">
        <a class="navbar-brand" href="#">
          <img src={psiqueImageUrl} alt="" width="100" height="50" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
