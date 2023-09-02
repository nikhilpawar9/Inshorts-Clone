import React from "react";
import "./NavBar.css";
import HamburgerDrawer from "./HamburgerDrawer/HamburgerDrawer";

const NavBar = () => {
  return (
    <div className="nav">
      <HamburgerDrawer />
      <div className="icon"></div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="logo"
        height="80%"
      />
    </div>
  );
};

export default NavBar;
