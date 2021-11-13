import "../NavBar/NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiFruitBowl, GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../Redux/Actions/actions";

function NavBar() {
  const [keyword, setKeyword] = useState("")
  const counter = useSelector((state) => state.Counter);
  const dispatch = useDispatch()
  return (
    <div className="navBarContainer">
      <Link to="/" className="logo" title="Fresh Bio">        
          <GiFruitBowl />
          <p className="logoTitle">Fresh Bio</p>        
      </Link>
      <Link to="/" className="home" title="Home Page">        
          <FaHome style={{width:"80px"}} />        
      </Link>

      <div className="search">
        <input
          type="text"
          title="Serach..."
          placeholder="Serach For Products..."
          value={keyword}
          onChange={(e)=>setKeyword(e.target.value)}
        />
        <button 
        className="btn-search" 
        title="Search"
        onClick={()=> dispatch(search(keyword))}
        >
          Search
          <FaSearch />
        </button>
      </div>

      <Link to="/cart" className="btn-cart">
        <div >
          <GiShoppingCart className="icon-cart" title="Cart" />
          <span className="counter">{counter}</span>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
