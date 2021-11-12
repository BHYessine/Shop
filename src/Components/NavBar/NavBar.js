import "../NavBar/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { GiFruitBowl, GiShoppingCart } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavBar() {
  const counter = useSelector((state) => state.Counter);

  return (
    <div className="navBarContainer">
      <Link to="/">
        <div className="logo" title="Fresh Bio">
          <GiFruitBowl />
          Fresh Bio
        </div>
      </Link>
      <Link to="/">
        <div className="home" title="Home Page">
          <FaHome />
        </div>
      </Link>

      <Link to="/cart">
        <div className="btn-cart">
          <GiShoppingCart className="icon-cart" title="Cart" />
          <span className="counter">{counter}</span>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;

