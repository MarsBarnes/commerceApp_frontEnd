import React, { useContext } from "react";
import dino from "../images/dinosaur.webp";



export const OrderProducts = ({ i, index }) => {

  return (
    <div className="card mb-3 .h-100 bg-success" key={i.id}>
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
            <h5 className="card-title">name: {i.product_name}</h5>
            <p className="card-text">description: {i.product_description}</p>
            <p>Price: {i.price}</p>
            <p>Color: {i.color}</p>
            <p>Quantity: {i.product_quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
