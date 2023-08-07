import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "20px",
        border: "1px solid black",
        margin: "20px",
      }}
    >
      {children}
    </div>
  );
}
