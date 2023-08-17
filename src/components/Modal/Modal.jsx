import React from "react";

import style from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={style.modalOverlay}>
      <input onChange></input>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
