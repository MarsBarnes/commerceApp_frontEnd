import dino from "../images/dinosaur.webp"

export const ShopProduct = ({ i, index }) => {

  const handleClick = () => {
    //add product to cart, quantity 1
  }

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
