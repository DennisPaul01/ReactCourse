import React from "react";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Faculties.module.css";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

export default function Faculties({ faculties }) {
  return (
    <div className={style.faculties}>
      <h1>Faculties</h1>
      <div>
        {faculties.map((faculty, index) => {
          return (
            <Paper key={index}>
              <InfoBlock info={faculty.name} />
            </Paper>
          );
        })}
      </div>
      <Button icon={<AiFillPlusCircle />} text={"ADD FACULTY"} onClick={null} />
    </div>
  );
}
