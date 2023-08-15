import React from "react";

import style from "./Paper.module.css";

export default function Paper({ children }) {
  return <div className={style.paper}>{children}</div>;
}
