import React from "react";

export const FormatDate = ({ i, index }) => {

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

  return (
    <p className="card-text noMargins">
      Ordered on: {formattedDate}
    </p>
  );
};
