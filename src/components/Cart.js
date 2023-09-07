// import React, { useState } from "react";
// import { CartData } from "./CartData";
// import { CartProduct } from "./CartProduct";

// //Change so that Data is not hard coded and comes freom the data base instead
// const Cart = () => {
//   const [cartData, setCartData] = useState(CartData);
//   return (
//     <div className="grid">
//       {cartData?.map((i, index) => (
//         <CartProduct i={i} index={index} key={i.id} />
//       ))}
//       <button className="checkout_button btn btn-primary" type="button">
//         Checkout
//       </button>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect, useContext } from "react";
// import { CartData } from "./CartData";
import { CartProduct } from "./CartProduct";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";

//Change so that Data is not hard coded and comes freom the data base instead
const Cart = () => {
  const token = useContext(TokenContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await axios.get("http://localhost:3000/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data)
        setCartData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }

    fetchCartData();
  }, [token]);

  return (
    <div className="shop-width">
      <div className="grid">
        {cartData?.map((i, index) => (
          <CartProduct i={i} index={index} key={i.product_id} />
        ))}
      </div>
      <button className="checkout_button btn btn-primary" type="button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
