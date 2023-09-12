import React, { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";

export const FormatDate = ({ i, index }) => {
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
  const formattedDate = formatDate(i);

  return <p className="card-text">Ordered on: {formattedDate}</p>;
};
