import React, { useState, useEffect, useContext } from "react";
import { CartProduct } from "./CartProduct";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const token = useContext(TokenContext);

  const [cartData, setCartData] = useState([]);

  const removeFromCart = async (productId) => {
    try {
      // Make an API call to remove the item from the database
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${productId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/cart`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
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
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/cart/checkout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast("Your order was successfully placed");
      setCartData([]);
    } catch (error) {
      console.error("Error Checking Out:", error);
    }
  };

  return (
    <div className="left-right-margin">
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
          disabled={cartData.length === 0 ? true : false}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
