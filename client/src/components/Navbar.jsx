import React from "react";
import NavbarStyle from "./css/NavbarStyle.css";

function Navbar() {
  return (
    <div uk-sticky="true">
      <nav className="uk-navbar-contaner" uk-navbar="true">
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="">Главная</a></li>
            <li className="uk-parent">
              <a href="">Композиции</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active"><a href="">Active</a></li>
                  <li><a href="">Item</a></li>
                  <li><a href="">Item</a></li>
                </ul>
              </div>
            </li>
            <li><a href="">О нас</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// Sticky settings: uk-sticky="animation: uk-animation-scale-up; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 70"
