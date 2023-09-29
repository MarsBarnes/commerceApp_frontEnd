import React from "react";
import dino from "../images/sticker.jpg";

export const OrderProducts = ({ i, index }) => {
  return (
    <div className="card bg-success" key={i.product_id}>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            className="product_img img-fluid rounded-start"
            src={dino}
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{i.product_name}</h5>
            <p className="card-text">{i.product_description}</p>
            <p>Price: {i.price}</p>
            <p>Color: {i.color}</p>
            <p>Quantity: {i.product_quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
