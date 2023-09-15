import React, { useContext } from "react";
import dino from "../images/dinosaur.webp";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";

export const CartProduct = ({ i, index, removeFromCart }) => {
  const token = useContext(TokenContext);

  const handleClick = async () => {
    removeFromCart(i.product_id);
  };

  return (
    <div className="card mb-3 .h-100 bg-success" key={i.product_id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="h-100 product_img img-fluid rounded-start"
            src={dino}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{i.product_name}</h5>
            <p className="card-text">{i.product_description}</p>
            <p>{i.price}</p>
            <p>Color: {i.color}</p>
            <p>Quantity: {i.product_quantity}</p>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleClick}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
