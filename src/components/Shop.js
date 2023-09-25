import React, { useState, useEffect } from "react";
import { ShopProduct } from "./ShopProduct";
import axios from "../api";

const Shop = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchShopData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/products`,
          {}
        );
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
