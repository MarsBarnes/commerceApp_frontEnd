import { useState, useEffect, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";

export const useOrderData = ( orderId ) => {
  const token = useContext(TokenContext);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    async function fetchOrderData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/orders/${orderId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response.data);
        setOrderData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    }

    fetchOrderData();
  }, [token, orderId]);
    
    return orderData;
};


