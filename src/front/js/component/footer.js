import React, { Component } from "react";
import psiqueImageUrl from "../../img/Psiento1.png";
import instagramLogo from "../../img/instagram-svgrepo-com-01.png";
import twitterLogo from "../../img/twitter-svgrepo-com-01.png";
import mailLogo from "../../img/mail_FILL1_wght400_GRAD0_opsz48-01.png";

export const Footer = () => (
  <div
    id="footer"
    className="container-fluid align-content-center"
    fixed="bottom"
  >
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img
            className="bi align-self-center"
            src={psiqueImageUrl}
            width="110"
            height="30"
          />
        </a>
        <span className="mb-md-0 text-white">© 2022 @PsientoWell</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://www.instagram.com/psientowell/"
            target="_blank"
          >
            <img className="bi" width="24" height="24" src={instagramLogo} />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://twitter.com/PsientoWell"
            target="_blank"
          >
            <img className="bi" width="24" height="24" src={twitterLogo} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="mailto:psientowell@gmail.com">
            <img className="bi" width="24" height="24" src={mailLogo} />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);
