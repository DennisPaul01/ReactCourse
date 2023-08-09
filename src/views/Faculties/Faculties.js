import React from "react";
import Paper from "../../components/Paper";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

export default function Faculties({ faculties }) {
  return (
    <div>
      <h1>Faculties</h1>
      {faculties.map((faculty, index) => {
        return (
          <Paper key={index}>
            <p>{faculty.name}</p>
          </Paper>
        );
      })}
      <Button icon={<AiFillPlusCircle />} text={"ADD FACULTY"} onClick={null} />
    </div>
  );
}
