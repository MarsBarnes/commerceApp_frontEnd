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

  //GOAL: get productData for each product_id in orderData. to display on order page
//iterate through OrderData to get list of product_ids and product_quantities
//

  return (
    <div className="shop-width">
      <div className="grid">
        <div className="card mb-3 .h-100 bg-success" key={i.id}>
          <div className="row g-0">
            <div className="">
              <div className="card-body">
                <h5 className="card-title">
                  Order Number: {orderData[0]?.order_id}
                </h5>
                {/* add total to order table when order is checkout and then replace total value  */}
                <FormatDate i={orderData[0]?.created_at} />
                <p className="card-text">Total: {orderData[0]?.total}</p>
              </div>
            </div>
          </div>
        </div>
        {/* change orderData to an array of product data */}
        {orderData && orderData.length > 0 ? (
          orderData.map((orderItem, index) => (
            <OrderProducts
              i={orderItem}
              index={index}
              key={orderItem.product_id}
            />
          ))
        ) : (
          <p>You haven't made any orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
