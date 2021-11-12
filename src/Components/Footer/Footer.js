import "../Footer/Footer.css";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsWhatsapp
} from "react-icons/bs";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerItems">
        <p className="description">
          Hello, we are "FRESH BIO", a market dedicated to edible products. Our
          products are Bio and Fresh.
        </p>
        <div className="social">
          <BsFacebook className="icon-social" />
          <BsInstagram className="icon-social" />
          <BsYoutube className="icon-social" />
          <BsTwitter className="icon-social" />
          <BsWhatsapp className="icon-social" />
        </div>

        <p className="copyright">Fresh Bio © 2021</p>
      </div>
    </div>
  );
}

export default Footer;
