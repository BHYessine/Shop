import "../Cart/Cart.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillDelete,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineArrowLeft
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  categoryList,
  decrease,
  increase,
  remove
} from "../../Redux/Actions/actions";
function Cart() {
  const cartList = useSelector((state) => state.Cart);
  const sum = useSelector((state) => state.Total);
  const dispatch = useDispatch();
  return (
    <div className="cartContainer">
      <Link to={"/products"} style={{ height: "40px" }}>
        <AiOutlineArrowLeft
          style={{
            width: "40px",
            height: "40px",
            color: "white",
            backgroundColor: "rgb(255, 153, 0)",
            borderRadius: "50%",
            padding: "5px"
          }}
          title="Products"
          onClick={() => dispatch(categoryList("all"))}
        />
      </Link>
      <div className="cartList">
        <ul className="cartHeader">
          <li>
            <h4 style={{ width: "400px" }}>Title</h4>
          </li>
          <li>
            <h4 style={{ width: "200px" }}>Price/Unit</h4>
          </li>
          <li>
            <h4 style={{ width: "200px" }}>Quantity</h4>
          </li>
          <li>
            <h4 style={{ width: "200px" }}>Total</h4>
          </li>
        </ul>
        <div className="cartItems">
          {cartList.length === 0
            ? "Bye Something!!"
            : cartList.map((item) => {
                const total = item.price * item.amt;
                return (
                  <div className="itemDetails">
                    <div className="itemTitle" style={{ width: "400px" }}>
                      <img src={item.src} width="90px" height="70px" alt="" />
                      <p>{item.title}</p>
                    </div>
                    <div className="itemPrice" style={{ width: "200px" }}>
                      <p>
                        {item.price.toFixed(3)} TND / {item.unit}
                      </p>
                    </div>
                    <div className="itemQuantity" style={{ width: "200px" }}>
                      <AiFillMinusCircle
                        className="icon-item dash"
                        title="increase"
                        onClick={() => dispatch(increase(item.id))}
                      />
                      <span style={{ width: "20px" }}>{item.amt}</span>
                      <AiFillPlusCircle
                        className="icon-item plus"
                        title="decrease"
                        onClick={() => dispatch(decrease(item.id))}
                      />
                      <AiFillDelete
                        className="icon-item delete"
                        title="remove"
                        onClick={() => dispatch(remove(item.id))}
                      />
                    </div>
                    <div className="itemTotal" style={{ width: "200px" }}>
                      {total.toFixed(3)} TND
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="cartTotal">
        <p>Total Amount :</p>
        <span>{Number(sum).toFixed(3)} TND</span>
        <Link to="/order">
          <button className="btn-order">Order</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
