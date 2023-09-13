import React from "react";
import Paper from "../../components/Paper/Paper";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Tutors.module.css";
import TutorForm from "../../components/Forms/TutorForm/TutorForm";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useToggle } from "../../hooks/useToggle";

import { useTutors } from "../../store/TutorsContext";
import { useSelector } from "react-redux";
import { getTutors } from "../../redux/selectors";
import { addTutor } from "../../redux/tutorsSlice";

export default function Tutors() {
  const tutors = useSelector(getTutors);
  const { isLoading, error } = useTutors();

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
          <TutorForm onAddTutor={addTutor} closeModal={close} />
        </Paper>
      )}

      <Button icon={<AiFillPlusCircle />} text={"ADD TUTOR"} onClick={toggle} />
    </div>
  );
}
