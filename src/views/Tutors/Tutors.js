import React from "react";
import Paper from "../../components/Paper";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

export default function Tutors({ tutors }) {
  return (
    <div>
      <h1>Tutors</h1>
      {tutors.map((tutor, index) => {
        return (
          <Paper key={index}>
            <Tutor
              city={tutor.city}
              email={tutor.email}
              firstName={tutor.firstName}
              lastName={tutor.lastName}
              options={tutor.options}
              phone={tutor.phone}
            />
          </Paper>
        );
      })}

      <Button icon={<AiFillPlusCircle />} text={"ADD TUTOR"} onClick={null} />
    </div>
  );
}
