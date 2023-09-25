import React from "react";
import { Link } from "react-router-dom";
import { FormatDate } from "./FormatDate";


export const OrderSummary = ({ i, index }) => {

  return (
    <div className="card mb-3 .h-100 bg-success" key={i.id}>
      <div className="row g-0">
        <div className="">
          <div className="card-body">
            <h5 className="card-title">Order Number: {i.id}</h5>
            <FormatDate i={i.created_at} />
            <p className="card-text">Total: {i.total}</p>
            <Link to={`/order/${i.id}`} className="btn btn-secondary">
              View Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
