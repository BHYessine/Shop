import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "../Order/Order.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "../../Redux/Actions/actions";

export default function Order() {
  const [show, setShow] = useState(true);
  const [customer, setCustomer] = useState({});
  const cartDetails = useSelector((state) => state.Cart);
  const cartTotal = useSelector((state) => state.Total);
  const dispatch = useDispatch();
  const handlePurchase = () => {
    dispatch(clear());
    alert(
      "Your order has been successfully completed, our customer service will contact you within 48 hours at the latest"
    );
  };
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
    setShow(false);
    setCustomer(data);
  };
  return (
    <div className="orderContainer">
      {show ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Gender :
            <select {...register("genderInput")}>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
          </label>
          <label>
            First Name:
            <input
              {...register("fnameInput", {
                required: "Please enter your first name."
              })}
            />
            <ErrorMessage errors={errors} name="fnameInput" as="p" />
          </label>
          <label>
            Last Name :
            <input
              {...register("lnameInput", {
                required: "Please enter your last name."
              })}
            />
            <ErrorMessage errors={errors} name="lnameInput" as="p" />
          </label>
          <label>
            Phone :
            <input
              {...register("phoneInput", {
                required: "Please enter your phone number."
              })}
              type="tel"
            />
            <ErrorMessage errors={errors} name="phoneInput" as="p" />
          </label>
          <label>
            Email :
            <input
              {...register("emailInput", {
                required: "Please enter a valid address email."
              })}
              type="email"
            />
            <ErrorMessage errors={errors} name="emailInput" as="p" />
          </label>
          <label>
            Address :
            <input
              {...register("addressInput", {
                required: "Please enter your address."
              })}
              type="text"
            />
            <ErrorMessage errors={errors} name="addressInput" as="p" />
          </label>

          <input type="submit" className="submit" value="Order" />
        </form>
      ) : (
        <div className="purchaseContainer">
          <div className="customerDetails">
            <h2>Customer Details :</h2>
            <h5>
              Full Name : {customer.genderInput} {customer.lnameInput}{" "}
              {customer.fnameInput}{" "}
            </h5>
            <h5>Delivery Address : {customer.addressInput} </h5>
            <h5>Phone Number : {customer.phoneInput} </h5>
            <h5>Address Email: {customer.emailInput} </h5>
          </div>
          <div className="cartDetails">
            <h2>Cart Details :</h2>
            {cartDetails.map((item) => {
              return (
                <h5>
                  {" "}
                  {item.title} : {item.amt} {item.unit}{" "}
                </h5>
              );
            })}
            <h5>Total Amount : {cartTotal.toFixed(3)}</h5>
          </div>
          <div className="btn-purchase">
            <button className="submit" onClick={() => setShow(true)}>
              Retour
            </button>

            <Link to="/" className="submit" onClick={() => handlePurchase()}>
              Purchase
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
