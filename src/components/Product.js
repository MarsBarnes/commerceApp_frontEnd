import dino from "../images/dinosaur.webp"

export const Product = ({ i, index }) => {

  const handleClick = {
    //add product to cart, quantity 1
  }

  return (
    <div className="product" key={i.id}>
      <img className="product_img" src={dino}></img>
      <h3 className="h3roduct_name">{i.product_name}</h3>
      <p>{i.product_description}</p>
      <p>{i.color}</p>
      <p>{i.price}</p>
      <button onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};
