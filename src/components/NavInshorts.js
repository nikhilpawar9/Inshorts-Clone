import React from 'react';
import "./NavInshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshorts = () => {
  return (
    <div className='nav'>
      <div className="icon">
        <HamburgerDrawer/>
      </div>
      <img 
        style={{cursor:"pointer"}}
      src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height="80%"/>

    </div>
  )
}

export default NavInshorts;