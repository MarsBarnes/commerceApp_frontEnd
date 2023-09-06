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

import dino from "../images/dinosaur.webp";

export const CartProduct = ({ i, index }) => {
  const handleClick = () => {
    //remove product from cart, quantity 1
  };

    return (
      <div className="col">
        <div className="card .h-100 bg-success" key={i.id}>
          <img className="product_img card-img-top" src={dino}></img>
          <h3 className="card-title">{i.product_name}</h3>
          <div className="card-body">
            <p className="card-text">{i.product_description}</p>
            <p>{i.price}</p>
            <p>Color: {i.color}</p>
            <p>Quantity: {i.quantity}</p>
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
    );
};
