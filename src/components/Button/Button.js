import React from "react";

import style from "./Button.module.css";

export default function Button({ text, icon, declansator }) {
  return (
    <button className={style.button} onClick={declansator}>
      {icon}
      {text}
    </button>
  );
}
