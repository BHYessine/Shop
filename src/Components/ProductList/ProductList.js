import "../ProductList/ProductList.css";
import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
function ProductList() {
  const [filter, setFilter] = useState("");
  const products = useSelector((state) => state.SearchList);
  const category = useSelector((state) => state.Category);
  const dispatch = useDispatch();

  const active = {
    color: "white",
    backgroundColor: "rgb(255, 153, 0)"
  };
  return (
    <div className="listContainer">
      <div className="filterContainer">
        <p style={{ fontSize: "16px", fontWeight: "bold", width: "100px" }}>
          Category :
        </p>
        <Link to={"/products"}>
          <button
            className="btn-filter"
            title="All"
            onClick={() => {
              setFilter("all");
              dispatch(categoryList(""));
            }}
            style={filter === "all" || category === "all" ? active : null}
          >
            All
          </button>
        </Link>
        <Link to={"/products/vegetable"}>
          <button
            className="btn-filter"
            title="Vegetable"
            onClick={() => {
              setFilter("vegetable");
              dispatch(categoryList(""));
            }}
            style={
              filter === "vegetable" || category === "vegetable" ? active : null
            }
          >
            Vegetable
          </button>
        </Link>
        <Link to={"/products/fruit"}>
          <button
            className="btn-filter"
            title="Fruit"
            onClick={() => {
              setFilter("fruit");
              dispatch(categoryList(""));
            }}
            style={filter === "fruit" || category === "fruit" ? active : null}
          >
            Fruit
          </button>
        </Link>
        <Link to={"/products/meat"}>
          <button
            className="btn-filter"
            title="Meat"
            onClick={() => {
              setFilter("meat");
              dispatch(categoryList(""));
            }}
            style={filter === "meat" || category === "meat" ? active : null}
          >
            Meat
          </button>
        </Link>
        <Link to={"/products/chicken"}>
          <button
            className="btn-filter"
            title="Chicken"
            onClick={() => {
              setFilter("chicken");
              dispatch(categoryList(""));
            }}
            style={
              filter === "chicken" || category === "chicken" ? active : null
            }
          >
            Chicken
          </button>
        </Link>
      </div>
      <div className="productsContainer">
        {filter === "all" || category === "all"
          ? products.map((item) => {
              return (
                <ProductCard
                  id={item.id}
                  type={item.type}
                  title={item.title}
                  price={item.price}
                  unit={item.unit}
                  src={item.src}
                  amt={item.amt}
                />
              );
            })
          : null}
        {filter === "vegetable" || category === "vegetable"
          ? products.map((item) => {
              return (
                item.type === (filter || category) && (
                  <ProductCard
                    id={item.id}
                    type={item.type}
                    title={item.title}
                    price={item.price}
                    unit={item.unit}
                    src={item.src}
                    amt={item.amt}
                  />
                )
              );
            })
          : null}
        {filter === "fruit" || category === "fruit"
          ? products.map((item) => {
              return (
                item.type === (filter || category) && (
                  <ProductCard
                    id={item.id}
                    type={item.type}
                    title={item.title}
                    price={item.price}
                    unit={item.unit}
                    src={item.src}
                    amt={item.amt}
                  />
                )
              );
            })
          : null}
        {filter === "chicken" || category === "chicken"
          ? products.map((item) => {
              return (
                item.type === (filter || category) && (
                  <ProductCard
                    id={item.id}
                    type={item.type}
                    title={item.title}
                    price={item.price}
                    unit={item.unit}
                    src={item.src}
                    amt={item.amt}
                  />
                )
              );
            })
          : null}
        {filter === "meat" || category === "meat"
          ? products.map((item) => {
              return (
                item.type === (filter || category) && (
                  <ProductCard
                    id={item.id}
                    type={item.type}
                    title={item.title}
                    price={item.price}
                    unit={item.unit}
                    src={item.src}
                    amt={item.amt}
                  />
                )
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ProductList;
