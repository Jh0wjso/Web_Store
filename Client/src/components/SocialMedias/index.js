import React from "react";

import "./styles.css";

import {
  FaInstagram,
  FaFacebookSquare,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMedias() {
  return (
    <div className="content rounded p-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center fw-bold text-uppercase">
        Se Conecte conosco:
      </h1>
      <section className="medias">
        <div className="d-flex flex-row">
          <a className="px-3 iconLink d-flex iconLinkInsta flex-column align-items-center">
            <FaInstagram size={60} />
            <strong className="text-center mediaTexto">Instagram</strong>
          </a>
          <a className="px-3 iconLink iconLinkFace d-flex flex-column align-items-center">
            <FaFacebookSquare size={60} />
            <strong className="text-center fw-bold">Facebook</strong>
          </a>
        </div>

        <div className="d-flex flex-row">
          <a className="px-3 iconLink iconLinkMail d-flex flex-column align-items-center">
            <FaGoogle size={60} />
            <strong className="text-center">E-Mail</strong>
          </a>

          <a className="px-3 iconLink iconLinkTwitter d-flex flex-column align-items-center">
            <FaTwitter size={60} />
            <strong className="text-center">Twitter</strong>
          </a>
        </div>
      </section>
    </div>
  );
}
