import React, { useState, useEffect } from "react";

import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Faculties.module.css";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import FacultiesForm from "../../components/Forms/FacultiesForm/FacultiesForm";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useToggle } from "../../hooks/useToggle";
import { useSelector } from "react-redux";
import {
  selectFaculties,
  selectFacultiesError,
  selectFacultiesIsLoading,
} from "../../redux/selectors";

import { deleteFaculty } from "../../redux/operations";

export default function Faculties() {
  const faculties = useSelector(selectFaculties);
  const error = useSelector(selectFacultiesError);
  const isLoading = useSelector(selectFacultiesIsLoading);

  const { isOpen, close, toggle } = useToggle();

  const onAddFaculty = (faculty) => {
    const randomId = Math.floor(Math.random() * 1000 + 1);

    close();
  };

  const onEditFaculty = (id, newFaculty) => {
    //  prev === faculties
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={style.faculties}>
      <h1>Faculties</h1>
      <div>
        {faculties?.map((faculty, index) => {
          return (
            <Paper key={index}>
              <InfoBlock
                id={faculty.id}
                type={"FACULTY"}
                info={faculty.name}
                onDelete={deleteFaculty}
                onEdit={onEditFaculty}
              />
            </Paper>
          );
        })}
      </div>

      {isOpen && (
        <Paper>
          <FacultiesForm onAddFaculty={onAddFaculty} />
        </Paper>
      )}

      <Button
        icon={<AiFillPlusCircle />}
        text={"ADD FACULTY"}
        onClick={toggle}
      />
    </div>
  );
}
