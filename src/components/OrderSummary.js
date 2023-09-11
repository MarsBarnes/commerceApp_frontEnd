import React, { useContext } from "react";
import dino from "../images/dinosaur.webp";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";
import { Link } from "react-router-dom";

export const OrderSummary = ({ i, index }) => {
  const token = useContext(TokenContext);

  function formatDate(dateString) {
    const options = {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
    }
    const formattedDate = formatDate(i.created_at);


  return (
    <div className="card mb-3 .h-100 bg-success" key={i.id}>
      <div className="row g-0">
        <div className="">
          <div className="card-body">
            <h5 className="card-title">Order Number: {i.id}</h5>
            {/* add date, total, and orderNumber to order table when order is checkout and then replace these values  */}
            <p className="card-text">Ordered on: {formattedDate}</p>
            <p className="card-text">Total: $30.45</p>
            <Link to={"/order"} className="btn btn-secondary">
              View Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
