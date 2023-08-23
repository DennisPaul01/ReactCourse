import React, { useEffect, useState } from "react";
import Paper from "../../components/Paper/Paper";
import Tutor from "../../components/Tutor/Tutor";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Tutors.module.css";
import TutorForm from "../../components/Forms/TutorForm/TutorForm";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { tutorApi } from "../../api/api";

export default function Tutors() {
  const [tutors, setTutors] = useState();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddTutor = async (tutor) => {
    try {
      const response = await tutorApi.create(tutor);
      setTutors((prev) => [...prev, response.data]);
      setShowForm(false);
    } catch (error) {
      setError("A aparut o eroare la creearea unui tutore!");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await tutorApi.getAll();
        setTutors(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("A aparut o erroare la cererea catre /tutors");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
