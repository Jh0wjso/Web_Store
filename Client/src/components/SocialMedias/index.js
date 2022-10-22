import React from "react";

import "./styles.css";

import {FaInstagram, FaFacebookSquare, FaGoogle, FaTwitter} from "react-icons/fa";

export default function SocialMedias() {
  return (
    <div className="container content rounded p-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center fw-bold text-uppercase">Se Conecte conosco:</h1>
      <section
        className="medias"
      >
        <div className="d-flex flex-row">
          <a className="px-3 iconLink">
              <FaInstagram 
                  size={60}
              />
          </a>
          <a className="px-3 iconLink">
              <FaFacebookSquare 
                  size={60}
              />
          </a>
        </div>
        
        <div className="d-flex flex-row">
          <a className="px-3 iconLink">
              <FaGoogle 
                  size={60}
              />
          </a>

          <a className="px-3 iconLink">
              <FaTwitter 
                  size={60}
              />
          </a>
        </div>
       
      </section>
    </div>
  );
}
