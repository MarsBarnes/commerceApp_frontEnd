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

import React, { useState } from "react";
import { CartData } from "./CartData";
import { CartProduct } from "./CartProduct";

//Change so that Data is not hard coded and comes freom the data base instead
const Cart = () => {
  const [cartData, setCartData] = useState(CartData);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cartData?.map((i, index) => (
          <CartProduct i={i} index={index} key={i.id} />
        ))}
      </div>
      <button className="checkout_button btn btn-primary" type="button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;

