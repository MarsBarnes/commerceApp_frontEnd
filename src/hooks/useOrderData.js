import { useState, useEffect, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";

export const useOrderData = (orderId) => {
  const token = useContext(TokenContext);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    async function fetchOrderData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/orders/${orderId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrderData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    }

    fetchOrderData();
  }, [token, orderId]);

  return orderData;
};
