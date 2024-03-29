import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event, id) => {
    const indexItem = storeState.cart.findIndex((obj) => obj.id === id);

    const objUpdated = {
      ...storeState.cart[indexItem],
      quantity: Number(event.target.value),
    };
    dispatch({
      type: "UPDATEITEM",
      payload: objUpdated,
    });
  };

  let totalPrice = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  return (
    <div className="global-container">
      <p className="heading-cart">Your cart :</p>
      <ul className="cart-list">
        {storeState.cart.map((item) => (
          <li key={item.id}>
            <img
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
              alt={item.title}
            />
            <div className="bloc-cart-infos">
              <h4>{item.title}</h4>
              <p>Price : {item.price}€</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantity</label>
              <input
                id="quantityInput"
                value={item.quantity}
                type="number"
                onChange={(e) => handleChange(e, item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="total-price">Total : {totalPrice.toFixed(2)}€</p>
      <button className="btn-cart">Checkout</button>
    </div>
  );
}
