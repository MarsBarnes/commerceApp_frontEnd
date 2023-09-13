import React, { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { Link } from "react-router-dom";
import { FormatDate } from "./FormatDate";


export const OrderSummary = ({ i, index }) => {
  const token = useContext(TokenContext);

  return (
    <div className="card mb-3 .h-100 bg-success" key={i.id}>
      <div className="row g-0">
        <div className="">
          <div className="card-body">
            <h5 className="card-title">Order Number: {i.id}</h5>
            {/* add date, total, and orderNumber to order table when order is checkout and then replace these values  */}
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
