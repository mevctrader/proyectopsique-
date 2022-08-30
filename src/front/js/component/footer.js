import React, { Component } from "react";
import psiqueImageUrl from "../../img/Psiento1.png";
import instagramLogo from "../../img/instagram-svgrepo-com-01.png";
import twitterLogo from "../../img/twitter-svgrepo-com-01.png";
import mailLogo from "../../img/mail_FILL1_wght400_GRAD0_opsz48-01.png";

export const Footer = () => (
  // <div
  //   id="footer"
  //   className="container-fluid align-content-center"
  //   fixed="bottom"
  // >
  //   <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
  //     <div className="col-md-4 d-flex align-items-center">
  //       <a
  //         href="/"
  //         className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
  //       >
  //         <img
  //           className="bi align-self-center"
  //           src={psiqueImageUrl}
  //           width="110"
  //           height="30"
  //         />
  //       </a>
  //       <span className="mb-md-0 text-white">© 2022 @PsientoWell</span>
  //     </div>

  //     <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
  //       <li className="ms-3">
  //         <a
  //           className="text-muted"
  //           href="https://www.instagram.com/psientowell/"
  //           target="_blank"
  //         >
  //           <img className="bi" width="24" height="24" src={instagramLogo} />
  //         </a>
  //       </li>
  //       <li className="ms-3">
  //         <a
  //           className="text-muted"
  //           href="https://twitter.com/PsientoWell"
  //           target="_blank"
  //         >
  //           <img className="bi" width="24" height="24" src={twitterLogo} />
  //         </a>
  //       </li>
  //       <li className="ms-3">
  //         <a className="text-muted" href="mailto:psientowell@gmail.com">
  //           <img className="bi" width="24" height="24" src={mailLogo} />
  //         </a>
  //       </li>
  //     </ul>
  //   </footer>
  // </div>
  <div id="footer" className="container-fluid">
    <footer className="py-5">
      <div className="row">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img
              className="bi me-2"
              width="110"
              height="30"
              src={psiqueImageUrl}
            />
          </a>
          <p className="text-muted">© 2022</p>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Secciones</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Inicio
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/blog" className="nav-link p-0 text-muted">
                Blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/videos" className="nav-link p-0 text-muted">
                Videos
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="foro" className="nav-link p-0 text-muted">
                Foro
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="test" className="nav-link p-0 text-muted">
                Test de Ansiedad
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>DATOS DE CONTACTO</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">PsientoWell@gmail.com</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-muted">Telf: +58 212 9601111</a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Suscribete con Nosotros</h5>
            <p>Informacion importante diaria para compartir con todos.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Dirección de Email
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribete
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 pb-5">
        <p>© 2022 PsientoWell, Inc. TODOS LOS DERECHOS RESERVADOS.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="link-dark"
              href="https://twitter.com/PsientoWell"
              target="_blank"
            >
              <img className="bi" width="24" height="24" src={twitterLogo} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link-dark"
              href="https://www.instagram.com/psientowell/"
              target="_blank"
            >
              <img className="bi" width="24" height="24" src={instagramLogo} />
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="mailto:psientowell@gmail.com">
              <img className="bi" width="24" height="24" src={mailLogo} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);
