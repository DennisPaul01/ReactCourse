import React from "react";
import Paper from "../../components/Paper/Paper";
import university from "../../assets/university.png";

import { HiPencilAlt } from "react-icons/hi";
import { BiSolidTrash } from "react-icons/bi";

import style from "./Card.module.css";

export default function Card() {
  return (
    <Paper>
      <div className={style.card}>
        <img src={university} alt="university" />
        <p>university</p>
        <p>MIT</p>
        <div>
          <HiPencilAlt />
          <BiSolidTrash />
        </div>
      </div>
    </Paper>
  );
}
