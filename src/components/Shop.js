import React, { useState, useEffect } from "react";
// import { Data } from "./ShopData";
import { ShopProduct } from "./ShopProduct";
import axios from "axios";


//Change so that Data is not hard coded and comes from the data base instead
const Shop = () => {
  const [productData, setProductData] = useState([]);

    useEffect(() => {
      async function fetchShopData() {
        try {
          const response = await axios.get("http://localhost:3000/products", {
          });
          console.log(response.data);
          setProductData(response.data); // Update the state with fetched data
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      }

      fetchShopData();
    }, []);
  
  return (
    <div className="shop-width">
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {productData?.map((i, index) => (
          <ShopProduct i={i} index={index} key={i.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
