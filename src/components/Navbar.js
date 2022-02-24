import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-danger">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li className="nav-item ">
            <a className="nav-link" exact href="#home">Home
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" exact href="#menu">
              
              Menu
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" exact href="#shop">
              
              Shop
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" exact href="#items">
              
              Items
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#about" exact>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
