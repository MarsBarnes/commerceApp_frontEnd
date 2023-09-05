import React, { useState, useEffect } from "react";
import {Data} from "./Data";
import { Product } from "./Product";




const Shop = () => {
  const [productData, setProductData] = useState(Data);
  return (
    <div className="">
      {productData?.map((i, index) => (
        <Product i={i} index={index} />
      ))}
    </div>
  );
};

export default Shop;


  