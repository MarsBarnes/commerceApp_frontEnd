// import dino from "../images/dinosaur.webp";

// export const CartProduct = ({ i, index }) => {
//   const handleClick = () => {
//     //remove product from cart, quantity 1
//   };

//   return (
//     <div className="product bg-success" key={i.id}>
//       <img className="product_img" src={dino}></img>
//       <h3 className="product_name">{i.product_name}</h3>
//       <p>{i.product_description}</p>

//       <p>{i.price}</p>
//       <p>Color: {i.color}</p>
//       <p>Quantity: {i.quantity}</p>
//       <button className="btn btn-secondary" type="button" onClick={handleClick}>
//         Remove From Cart
//       </button>
//     </div>
//   );
// };

import React, { useContext } from "react";
import dino from "../images/dinosaur.webp";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";

export const CartProduct = ({ i, index }) => {
  const token = useContext(TokenContext);

  const handleClick = async () => {
    //remove product to cart, quantity all
    const { data } = await axios.delete(
      `http://localhost:3000/cart/${i.product_id}`,
      // {
      //   product_id: i.product_id,
      // },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    alert(data.msg);
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
