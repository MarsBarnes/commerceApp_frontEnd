import React from "react";
import { OrderProducts } from "./OrderProducts";
import { useParams } from "react-router-dom";
import { FormatDate } from "./FormatDate";
import { useOrderData } from "../hooks/useOrderData";


const Order = () => {
  const i = useParams();
  const orderData = useOrderData(i.orderId);

  return (
    <div className="left-right-margin">
      <div className="container">
        <div className="card mb-3 .h-100 bg-success" key={i.id}>
          <div className="row g-0">
            <div className="">
              <div className="card-body">
                <h5 className="card-title">
                  Order Number: {orderData[0]?.order_id}
                </h5>
                <FormatDate i={orderData[0]?.created_at} />
                <p className="card-text">Total: {orderData[0]?.total}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
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
    </div>
  );
};

export default Order;
