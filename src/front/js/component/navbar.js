import React, { useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import psiqueImageUrl from "../../img/Psiento1.png";
import { FaUser, FaHome, FaBlog, FaVideo, FaComment } from "react-icons/fa";

export const Navigationabar = () => {
  const { store, actions } = useContext(Context);

  return (
    <Navbar id="navbar" className="navbar navbar-expand-lg text-dark">
      <Container>
        <Navbar.Brand href="#">
          <img src={psiqueImageUrl} alt="" width="140" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="menu-nav-1" href="/" to="/" className="mx-2">
              <FaHome />
              Home
            </Nav.Link>
            <Nav.Link id="menu-nav-2" href="/blog" to="/blog" className="mx-2">
              <FaBlog />
              Blog
            </Nav.Link>
            <Nav.Link
              id="menu-nav-3"
              href="/videos"
              to="/videos"
              className="mx-2"
            >
              <FaVideo />
              Videos
            </Nav.Link>
            <Nav.Link id="menu-nav-4" href="/foro" to="/blog" className="mx-2">
              <FaComment />
              Foro
            </Nav.Link>
            <Nav.Link id="menu-nav-5" href="/test" to="/blog" className="mx-2">
              Test
            </Nav.Link>
          </Nav>
          <Nav>
            {!store.token ? (
              <Nav.Link href="/login">
                <Button id="boton-nav-1" variant="outline-success">
                  <FaUser /> Login
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">
                <Button
                  id="boton-nav-2"
                  onClick={() => actions.logout()}
                  variant="outline-success"
                >
                  {" "}
                  Cerrar Sesión
                </Button>
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {!store.token ? (
              <Nav.Link href="/registro">
                <Button id="boton-nav-3" variant="outline-success">
                  <FaUser /> Registrarse
                </Button>
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
