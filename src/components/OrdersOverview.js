import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";
import { OrderSummary } from "./OrderSummary";

const OrdersOverview = () => {
  const token = useContext(TokenContext);
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    async function fetchOrdersData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/orders`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrdersData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    }

    fetchOrdersData();
  }, [token]);

  return (
    <div className="shop-width">
      <div className="grid">
        {ordersData && ordersData.length > 0 ? (
          ordersData.map((i, index) => (
            <OrderSummary i={i} index={index} key={i.product_id} />
          ))
        ) : (
          <p>You haven't made any orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default OrdersOverview;
