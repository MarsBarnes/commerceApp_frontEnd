import React, { useState, useEffect, useContext } from "react";
import { OrderProducts } from "./OrderProducts";
import { TokenContext } from "../contexts/TokenContext";
import { useParams } from "react-router-dom";
import { FormatDate } from "./FormatDate";
import { useOrderData } from "../hooks/useOrderData";


const Order = () => {
  const i = useParams();
  console.log('i', i)
  const token = useContext(TokenContext);
  const orderData = useOrderData(i.orderId);
  console.log('orderDATA: ' + orderData[0])

  //GOAL: get orderData to display on order page

  return (
    <div className="shop-width">
      <h1 className="center"> Order </h1>

      <div className="grid">
        <div className="card mb-3 .h-100 bg-success" key={i.id}>
          <div className="row g-0">
            <div className="">
              <div className="card-body">
                <h5 className="card-title">
                  Order Number: {orderData[0]?.order_id}
                </h5>
                {/* add date, total, and orderNumber to order table when order is checkout and then replace these values  */}
                <FormatDate i={orderData[0]?.created_at} />
                <p className="card-text">Total: $30.45</p>
              </div>
            </div>
          </div>
        </div>
        {orderData && orderData.length > 0 ? (
          orderData.map((i, index) => (
            <OrderProducts i={i} index={index} key={i.product_id} />
          ))
        ) : (
          <p>You haven't made any orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
