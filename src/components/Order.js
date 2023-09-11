import React, { useState, useEffect, useContext } from "react";
import { OrderProducts } from "./OrderProducts";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";

const Order = () => {
  //   const token = useContext(TokenContext);
  //   const [ordersData, setOrdersData] = useState([]);
  //   useEffect(() => {
  //     async function fetchOrdersData() {
  //       try {
  //         const response = await axios.get("http://localhost:3000/orders", {
  //           headers: { Authorization: `Bearer ${token}` },
  //         });
  //         console.log(response.data);
  //         setOrdersData(response.data); // Update the state with fetched data
  //       } catch (error) {
  //         console.error("Error fetching cart data:", error);
  //       }
  //     }

  //     fetchOrdersData();
  //   }, [token]);

  //   const viewOrder = async () => {
  //     //add logic to redirect to specific order page
  //   };

  return (
    // <div className="shop-width">
    //   <div className="grid">
    //     {ordersData && ordersData.length > 0 ? (
    //       ordersData.map((i, index) => (
    //         <Order
    //           i={i}
    //           index={index}
    //           key={i.product_id}
    //           viewOrder={viewOrder}
    //         />
    //       ))
    //     ) : (
    //       <p>You haven't made any orders yet.</p>
    //     )}
    //   </div>
    // </div>
    <h1> Order</h1>
  );
};

export default Order;
