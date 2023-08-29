import React, { useState, useEffect } from "react";

import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Faculties.module.css";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import FacultiesForm from "../../components/Forms/FacultiesForm/FacultiesForm";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useToggle } from "../../hooks/useToggle";

export default function Faculties() {
  const [faculties, setFaculties] = useState();

  const { isOpen, open, close, toggle } = useToggle();

  // * Creeaza / foloseste un custom hook
  // ! Adauga functionalitate de add/ edit/ delete faculty
  // ! Foloseste localStorage pentru a pastra data

  const onAddFaculty = (faculty) => {
    const randomId = Math.floor(Math.random() * 1000 + 1);
    setFaculties((prev) => [...prev, { id: randomId, name: faculty }]);
    close();
  };

  const onEditFaculty = (id, newFaculty) => {
    //  prev === faculties
    setFaculties((prev) =>
      prev.map((faculty) => {
        console.log(faculty);
        return faculty.id === id
          ? { id, name: newFaculty }
          : { id: faculty.id, name: faculty.name };
      })
    );
  };

  const onDeleteFaculty = (id) => {
    setFaculties((prev) => prev.filter((faculty) => faculty.id !== id));
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("faculties"));
    if (localStorageData) setFaculties(localStorageData);
  }, []);

  useEffect(() => {
    if (faculties) localStorage.setItem("faculties", JSON.stringify(faculties));
  }, [faculties]);

  if (!faculties) {
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
                onDelete={onDeleteFaculty}
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
