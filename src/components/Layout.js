import React from "react";
import {  Link } from "react-router-dom";


function Layout() {
  return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Shoppzee
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
            Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Search
            </Link>
          </li>
        </div>
      </nav>
  );
}

export default Layout;
