import React from "react";
import Paper from "../../components/Paper/Paper";

import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import style from "./Cities.module.css";

export default function Cities({ cities }) {
  return (
    <div className={style.cities}>
      <h1>Cities</h1>
      <div>
        {cities.map((city, index) => {
          return (
            <Paper key={index}>
              <InfoBlock info={city} />
            </Paper>
          );
        })}
      </div>

      <Button icon={<AiFillPlusCircle />} text={"ADD CITY"} onClick={null} />
    </div>
  );
}
