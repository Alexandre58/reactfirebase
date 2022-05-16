import React from "react";
import Logo from "./Logo";
//import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="footer_container">
      <Logo />
      <ul>
        <li>&copy; CreateReactReduxFirebase</li>
        <li>2022</li>
      </ul>
    </div>
  );
};

export default Footer;
