import { useContext } from "react";
import dino from "../images/dinosaur.webp";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";

export const ShopProduct = ({ i, index }) => {
  const token = useContext(TokenContext);

  const handleClick = async () => {
    //add product to cart, quantity 1
    const { data } = await axios.post(
      "http://localhost:3000/cart",
      {
        product_id: i.id,
        product_quantity: 1,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    alert(data.msg);
  };

  return (
    <div className="product bg-success" key={i.id}>
      <img className="product_img" src={dino}></img>
      <h3 className="product_name">{i.product_name}</h3>
      <p>{i.product_description}</p>
      <p>Color: {i.color}</p>
      <p>{i.price}</p>
      <button className="btn btn-secondary" type="button" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};
