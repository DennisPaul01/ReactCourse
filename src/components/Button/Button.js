import React from "react";

import style from "./Button.module.css";

export default function Button({ text, icon, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
