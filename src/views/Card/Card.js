import React from "react";
import Paper from "../../components/Paper";
import university from "../../assets/university.png";

import { HiPencilAlt } from "react-icons/hi";
import { BiSolidTrash } from "react-icons/bi";

export default function Card() {
  return (
    <Paper>
      <img src={university} alt="university" width={"50px"} />
      <p>university</p>
      <p>MIT</p>
      <div>
        <HiPencilAlt />
        <BiSolidTrash />
      </div>
    </Paper>
  );
}
