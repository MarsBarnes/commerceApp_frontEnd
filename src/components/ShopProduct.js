import { useContext } from "react";

import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StickerImage } from "./StickerImage";

export const ShopProduct = ({ i, index }) => {
  const token = useContext(TokenContext);
  const loggedIn = token !== "";

  const handleClick = async () => {
    //add product to cart, quantity 1
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cart`,
      {
        product_id: i.id,
        product_quantity: 1,
        price: i.price,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    toast(data.msg);
  };

  const handleCartClickWhenLoggedOut = async () => {
    toast("Login to add items to your cart.");
  };

  return (
    <div className="col d-flex justify-content-center">
      <div className="card bg-success h-100" key={i.id}>
        <StickerImage uuid={i.id} className="product_img card-img-top" />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{i.product_name}</h5>
          <p className="card-text">{i.product_description}</p>
          <p>{i.price}</p>
          <p>Color: {i.color}</p>
          <button
            className="btn btn-secondary mt-auto" // Use mt-auto to push the button to the bottom
            type="button"
            onClick={loggedIn ? handleClick : handleCartClickWhenLoggedOut}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
