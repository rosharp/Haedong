import React from "react";

function Nav() {
  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@s">
      <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="true">
        <li className="uk-active"><a href="#">Active</a></li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
        <li className="uk-nav-header">Header</li>
        <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
        <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
        <li className="uk-nav-divider"></li>
        <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
      </ul>
    </div>
  )
}

export default Nav;
