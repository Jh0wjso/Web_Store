import React from "react";

import "./styles.css";

import {FaInstagram, FaFacebookSquare, FaGoogle, FaTwitter} from "react-icons/fa";

export default function SocialMedias() {
  return (
    <div className="container content mb-5 p-5">
        <h1 className="text-center fw-bold text-uppercase">Se Conecte conosco:</h1>
      <section
        className="d-flex flex-row justify-content-center"
      >
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
       
      </section>
    </div>
  );
}
