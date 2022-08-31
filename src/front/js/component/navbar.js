import React, { useContext, useReducer } from "react";
import { Container, Nav, Navbar, Button  } from "react-bootstrap";
import { Context } from "../store/appContext";
import psiqueImageUrl from "../../img/Psiento1.png";
import { FaUser } from "react-icons/fa";

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
            <Nav.Link href="/" to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link href="/blog" to="/blog" className="mx-2">Blog</Nav.Link>
            <Nav.Link href="/videos" to="/videos" className="mx-2">Videos</Nav.Link>
            <Nav.Link href="/foro" to="/blog" className="mx-2">Foro</Nav.Link>
            <Nav.Link href="/test" to="/blog" className="mx-2">Test</Nav.Link>
          </Nav>
          {store.user && store.user.pnombre+' '+store.user.papellido}
          <Nav>
            {!store.token ? (
              <Nav.Link href="/login"><Button variant="outline-success"><FaUser /> Login</Button></Nav.Link>

            ) : (
              <Nav.Link href="/login"><Button onClick={() => actions.logout()} variant="outline-success"> Cerrar Sesión</Button></Nav.Link>
            )}
          </Nav>
          <Nav>
            {!store.token ? (
              <Nav.Link href="/registro">
                <Button variant="outline-success"><FaUser /> Registrarse</Button>
              </Nav.Link>
              ) : null
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
