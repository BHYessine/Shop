import "../HomePage/HomePage.css";
import React from "react";
import { MdDeliveryDining, MdSupportAgent } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categoryList } from "../../Redux/Actions/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className="homeContainer">
      <div className="products">
        <div className="productType type-1">
          <div className="productDetail">
            <h2>Vegetable of Month</h2>
            <Link to={"/products/vegetable"}>
              <h5
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(categoryList("vegetable"))}
              >
                VIEW MORE
              </h5>
            </Link>
          </div>
        </div>
        <div className="productType type-2">
          <div className="productDetail">
            <h2>Fruit of Month</h2>
            <Link to={"/products/fruit"}>
              <h5
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(categoryList("fruit"))}
              >
                VIEW MORE
              </h5>
            </Link>
          </div>
        </div>
        <div className="productType type-3">
          <div className="productDetail">
            <h2>Fresh Meat</h2>
            <Link to={"/products/meat"}>
              <h5
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(categoryList("meat"))}
              >
                VIEW MORE
              </h5>
            </Link>
          </div>
        </div>
        <div className="productType type-4">
          <div className="productDetail">
            <h2>Fresh Chicken</h2>
            <Link to={"/products/chicken"}>
              <h5
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(categoryList("chicken"))}
              >
                VIEW MORE
              </h5>
            </Link>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="service">
          <MdDeliveryDining className="icon-service" />
          <div className="txt-service">
            <h3>Free Delivery</h3>
            <h5>Order's Over 100TND</h5>
          </div>
        </div>
        <div className="service">
          <GrMoney className="icon-service" />
          <div className="txt-service">
            <h3>Variety Payment</h3>
            <h5>Online or Cash Payment</h5>
          </div>
        </div>
        <div className="service">
          <MdSupportAgent className="icon-service" />
          <div className="txt-service">
            <h3>Online Support</h3>
            <h5>Available 24Hours 7/7</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
