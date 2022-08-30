import React, { useContext } from "react";
import { Container, Nav, Navbar, Navlink, NavDropdown, Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import psiqueImageUrl from "../../img/Psiento1.png";

export const Navigationabar = () => {
  const { store, actions } = useContext(Context);

  return (
    <Navbar id="navbar" className="navbar navbar-expand-lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={psiqueImageUrl} alt="" width="140" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" to="/">Home</Nav.Link>
            <Nav.Link href="/blog" to="/blog">Blog</Nav.Link>
            <Nav.Link href="/videos" to="/videos">Videos</Nav.Link>
            <Nav.Link href="/foro" to="/blog">Foro</Nav.Link>
            <Nav.Link href="/test" to="/blog">Test</Nav.Link>
             {/*<NavDropdown title={ store.user && store.user.pnombre+' '+store.user.papellido} id="basic-nav-dropdown">
            
            {!store.token ? (
              <NavDropdown.Item href="/login" to="/login">Login</NavDropdown.Item>
              ) : (
                  <button
                    onClick={() => actions.logout()}
                    className="btn btn-primary ms-2"
                  >
                    Cerrar Sesión
                  </button>
                )}
              <NavDropdown.Item href="/registro" to="/registro">Registrarse</NavDropdown.Item>
              </NavDropdown>*/}
          </Nav>
          <Nav>
            {!store.token ? (
              <Nav.Link href="/login"><Button variant="outline-success">Login</Button></Nav.Link>

            ) : (
              
              <NavDropdown title={ store.user && store.user.pnombre+' '+store.user.papellido} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#"><Button
                    onClick={() => actions.logout()}
                    variant="outline-success"
                    defaultValue="Cerrar Sesión"
                  >
                    Cerrar Sesión
                  </Button></NavDropdown.Item>

              </NavDropdown>
             
                )}
            <Nav.Link href="/registro">
              <Button variant="outline-success">registrarse</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/*/<div className="collapse navbar-collapse" id="navbarSupportedContent">
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
              <a
                id="menu-7"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                
              </a>
              { store.user && store.user.pnombre+' '+store.user.papellido}
              <ul className="dropdown-menu dropdown-menu-end">
                {!store.token ? (
                  <Link id="menu-6" to="/login">
                    <button className="btn btn-primary ms-2 mb-1">
                      Log in
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => actions.logout()}
                    className="btn btn-primary ms-2"
                  >
                    Cerrar Sesión
                  </button>
                )}
                <li>
                  <Link id="menu-7" to="/registro">
                    <button className="btn btn-success ms-2">
                      Registrarse
                    </button>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
                </div>*/}
      </Container>
    </Navbar>
  );
};
