import React, { useState, useEffect, useContext } from "react";
// import { CartData } from "./CartData";
import { CartProduct } from "./CartProduct";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";

//Change so that Data is not hard coded and comes freom the data base instead
const Cart = () => {
  const token = useContext(TokenContext);

  const [cartData, setCartData] = useState([]);

  const removeFromCart = async (productId) => {
    try {
      // Make an API call to remove the item from the database
      await axios.delete(`http://localhost:3000/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update the cart data by filtering out the removed item
      setCartData((prevCartData) =>
        prevCartData.filter((item) => item.product_id !== productId)
      );
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await axios.get("http://localhost:3000/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);
        setCartData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }

    fetchCartData();
  }, [token]);

  const handleCheckout = async () => {
    try {
      // Make an API call to checkout cart
      await axios.post(`http://localhost:3000/cart/checkout`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Your order was successfully placed")
      setCartData([])
    } catch (error) {
      console.error("Error Checking Out:", error);
    }
  };

  return (
    <div className="shop-width">
      <div className="grid">
        {cartData && cartData.length > 0 ? (
          cartData.map((i, index) => (
            <CartProduct
              i={i}
              index={index}
              key={i.product_id}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <button
          className="checkout_button btn btn-primary"
          type="button"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
