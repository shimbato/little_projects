import React from "react";
import logo from "../../recource/icon/Group.svg";

export const FooterPhone = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <a className="footer-link" href="#">Politics</a>
          <a className="logo">
            <img className="logo-img" src={logo} alt="logo" />
          </a>

          <a className="phone" href="tel:380504565656">
            +38 050-456-56-56
          </a>
        </div>
      </div>
    </div>
  );
};
