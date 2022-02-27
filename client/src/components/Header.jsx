import React from "react";
import HeaderStyle from "./css/HeaderStyle.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="uk-child-width-1-2@lg uk-light" uk-grid="true">
      <div>
        <div className="headerContainer uk-background-cover uk-background-muted uk-height-medium " uk-parallax="bgy: -50" style={{ backgroundImage: `url(${require("./images/HeaderImage.jpg")})` }}>
          <div className="headerRow1"><Navbar /></div>
          <div><h1 className="headerRow2 uk-heading-large uk-text-center uk-panel uk-flex uk-flex-center uk-flex-middle">해동 사물놀이</h1></div>
        </div>
      </div>
    </div >
  );
}

export default Header;
