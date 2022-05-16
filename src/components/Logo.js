import React from "react";
import logo_image from "../assets/images/logo192.png";
const Logo = () => {
  return (
    <div className="logo-container">
      <h2>Thierry ALEXANDRE</h2>
      <img src={logo_image} alt="image grosse pieces" width={30} height={30} />
    </div>
  );
};

export default Logo;
