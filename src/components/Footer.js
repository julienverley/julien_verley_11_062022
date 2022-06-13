import React, { useState } from "react";
import Logo from "./Logo";
import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-footer">
        <LogoFooter />
      </div>
      <div className="droits">2020 Kasa. All right reserved</div>
    </div>
  );
};

export default Footer;
