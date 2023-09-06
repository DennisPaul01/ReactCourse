import React from "react";
import { useLocation } from "react-router-dom";

export default function HistoryRoute() {
  const location = useLocation();
  const history = location.state;
  return (
    <div>
      <h1>Istorie</h1>
      <p>{history}</p>
    </div>
  );
}
