import React from "react";
import Paper from "../../components/Paper/Paper";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Tutors.module.css";
import TutorForm from "../../components/Forms/TutorForm/TutorForm";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useToggle } from "../../hooks/useToggle";

import { useSelector } from "react-redux";
import { addTutor } from "../../redux/operations";

import {
  getTutors,
  getTutorsError,
  getTutorsIsLoading,
  selectCountStatesInRedux,
} from "../../redux/selectors";

export default function Tutors() {
  const tutors = useSelector(getTutors);
  const counterStatesinRedux = useSelector(selectCountStatesInRedux);

  const isLoading = useSelector(getTutorsIsLoading);

  const error = useSelector(getTutorsError);

  const { isOpen, close, toggle } = useToggle();

  return (
    <div className={style.tutors}>
      <h1>Tutors</h1>
      {JSON.stringify(counterStatesinRedux)}
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
