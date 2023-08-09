import React from "react";

export default function Button({ text, icon, onClick }) {
  return (
    <button onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
