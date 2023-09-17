import { useContext } from "react";
import dino from "../images/sticker.jpg";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";

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
    alert(data.msg);
  };

  const handleCartClickWhenLoggedOut = async () => {
    alert("Login to add items to your cart.");
  };

  return (
    <div className="col">
      <div className="card bg-success h-100" key={i.id}>
        <img className="product_img card-img-top" src={dino} alt="Dino"></img>

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
