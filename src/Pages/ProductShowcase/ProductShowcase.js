import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ProductShowcase.css";
import inventory from "../../data/inventory";
import { useDispatch } from "react-redux";

export default function ProductShowcase() {
  const [nbMugs, setNbMugs] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );

  const updateMugs = (e) => {
    setNbMugs(Number(e.target.value));
  };

const addToCart = e => {
  e.preventDefault()

  const itemAdded = {
    ...inventory[productClicked],
    quantity: nbMugs
  }

  dispatch({
    type: "ADDITEM",
    payload: itemAdded
  })
}

  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          className="img-showcase"
          src={
            process.env.PUBLIC_URL +
            `/images/${inventory[productClicked].img}.png`
          }
          alt="product image"
        />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClicked].title}</h2>
        <p>{inventory[productClicked].price}€</p>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={nbMugs}
            onChange={updateMugs}
          />
          <button>Add to cart</button>
          <span className="adding-info"></span>
        </form>
      </div>
    </div>
  );
}
