import React from "react";
import { StickerImage } from "./StickerImage";

export const OrderProducts = ({ i, index }) => {
  return (
    <div className="card bg-success" key={i.product_id}>
      <div className="row g-0">
        <div className="col-md-5">
          <StickerImage
            uuid={i.product_id}
            className={"product_img img-fluid rounded-start"}
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
