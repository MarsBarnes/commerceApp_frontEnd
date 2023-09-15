import React, { useContext } from "react";
import dino from "../images/sticker.jpg";


export const OrderProducts = ({ i, index }) => {
  const {
    product_name,
    product_description,
    price,
    color,
    product_quantity,
    product_id,
  } = i;

  return (
    <div className="card mb-3 .h-100 bg-success" key={product_id}>
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
            <p>Price: {i.price}</p>
            <p>Color: {i.color}</p>
            <p>Quantity: {i.product_quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
