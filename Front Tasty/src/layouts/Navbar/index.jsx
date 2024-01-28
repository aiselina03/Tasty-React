import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>
            <NavLink to={"/"}>Tasty</NavLink>
          </h3>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addPage"}>Add Page</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="resNavbar">
        <div className="row">
          <div className="logo">
            <h3>
              <NavLink to={"/"}>Tasty</NavLink>
            </h3>
          </div>
          <div className="bars">
            <i className="fa-solid fa-bars" onClick={toggleNavbar}></i>
          </div>
        </div>
        <div className={`resMenu ${isOpen ? "open" : ""} `}>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addPage"}>Add Page</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
