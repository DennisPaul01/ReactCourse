import React, { useState } from "react";
import Paper from "../../components/Paper/Paper";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Tutors.module.css";
import TutorForm from "../../components/Forms/TutorForm/TutorForm";

export default function Tutors({ data }) {
  const [tutors, setTutors] = useState(data);
  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddTutor = (tutor) => {
    setTutors((prev) => [...prev, tutor]);
    setShowForm(false);
  };

  return (
    <div className={style.tutors}>
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

      {showForm && (
        <Paper>
          <TutorForm onAddTutor={onAddTutor} />
        </Paper>
      )}

      <Button
        icon={<AiFillPlusCircle />}
        text={"ADD TUTOR"}
        onClick={onShowForm}
      />
    </div>
  );
}
