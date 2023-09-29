import React from "react";
import dino from "../images/sticker.jpg";

export const CartProduct = ({ i, index, removeFromCart }) => {

  const handleClick = async () => {
    removeFromCart(i.product_id);
  };

  return (
      <div className="card h-100 bg-success" key={i.product_id}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              className="product_img img-fluid rounded-start"
              src={dino}
              alt="..."
            />
          </div>
          <div className="col-md-6">
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
