import React from "react";
import Paper from "../../components/Paper";

import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

export default function Cities({ cities }) {
  return (
    <div>
      <h1>Cities</h1>
      {cities.map((city, index) => {
        return (
          <Paper key={index}>
            <p>{city}</p>
          </Paper>
        );
      })}
      <Button icon={<AiFillPlusCircle />} text={"ADD CITY"} onClick={null} />
    </div>
  );
}
