import React, { useEffect, useState } from "react";
import Paper from "../../components/Paper/Paper";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Tutors.module.css";
import TutorForm from "../../components/Forms/TutorForm/TutorForm";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useToggle } from "../../hooks/useToggle";

import { useTutors } from "../../store/TutorsContext";

export default function Tutors() {
  const { tutors, isLoading, error, onAddTutor } = useTutors();

  const { isOpen, close, toggle } = useToggle();

  return (
    <div className={style.tutors}>
      <h1>Tutors</h1>

      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {tutors?.map((tutor, index) => {
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
        </>
      )}

      {isOpen && (
        <Paper>
          <TutorForm onAddTutor={onAddTutor} closeModal={close} />
        </Paper>
      )}

      <Button icon={<AiFillPlusCircle />} text={"ADD TUTOR"} onClick={toggle} />
    </div>
  );
}
