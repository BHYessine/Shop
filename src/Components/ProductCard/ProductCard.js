import React from "react";
import "../ProductCard/ProductCard.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Actions/actions";

function ProductCard(props) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      src: props.src,
      unit: props.unit,
      amt: props.amt
    };
    dispatch(addItem(item));
  };

  return (
    <div className="cardContainer">
      <img src={props.src} title={props.title} alt={props.title} />
      <h3> {props.title} </h3>
      <h5>
        {props.price.toFixed(3)} TND / {props.unit}
      </h5>
      <BsFillCartPlusFill
        className="btn-buy"
        title="BUY"
        onClick={() => handleAdd()}
      />
    </div>
  );
}

export default ProductCard;
