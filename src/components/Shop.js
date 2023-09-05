import React, { useState } from "react";
import { Data } from "./ShopData";
import { ShopProduct } from "./ShopProduct";

//Change so that Data is not hard coded and comes from the data base instead
const Shop = () => {
  const [productData, setProductData] = useState(Data);
  return (
    <div className="grid">
      {productData?.map((i, index) => (
        <ShopProduct i={i} index={index} key={i.id} />
      ))}
    </div>
  );
};

export default Shop;
