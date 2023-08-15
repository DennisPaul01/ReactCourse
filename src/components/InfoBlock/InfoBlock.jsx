import React, { useState } from "react";

import { BsThreeDotsVertical, BsPencilSquare } from "react-icons/bs";
import { BiSolidTrash } from "react-icons/bi";

import style from "./InfoBlock.module.css";

export default function InfoBlock({ info }) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
    console.log("Salut");
  };

  return (
    <div className={style.info}>
      <p>{info}</p>
      <button onMouseEnter={handleModal}>
        <BsThreeDotsVertical />
      </button>

      {modal && (
        <div className={style.modal}>
          <div>
            <BsPencilSquare />
            <p>Edit</p>
          </div>
          <div>
            <BiSolidTrash />
            <p>Delete</p>
          </div>
        </div>
      )}
    </div>
  );
}
