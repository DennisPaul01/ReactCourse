import React, { useState, useEffect } from "react";

import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";

import style from "./Faculties.module.css";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import FacultiesForm from "../../components/Forms/FacultiesForm/FacultiesForm";

export default function Faculties({ data }) {
  const [faculties, setFaculties] = useState();
  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddFaculty = (faculty) => {
    setFaculties((prev) => [...prev, { name: faculty }]);
    setShowForm(false);
  };

  const onDeleteFaculty = (faculty) => {
    setFaculties((prev) => prev.filter((item) => item.name !== faculty));
  };

  const onEditFaculty = (faculty, newFaculty) => {
    console.log(faculty);
    console.log(newFaculty);

    setFaculties((prev) =>
      prev.map((item) => {
        return item.name === faculty ? { name: newFaculty } : { name: faculty };
      })
    );
  };

  useEffect(() => {
    const localStorageCities = JSON.parse(localStorage.getItem("faculties"));
    setFaculties(localStorageCities);
  }, []);

  useEffect(() => {
    if (faculties) localStorage.setItem("faculties", JSON.stringify(faculties));
  }, [faculties]);

  console.log(faculties);
  return (
    <div className={style.faculties}>
      <h1>Faculties</h1>
      <div>
        {faculties?.map((faculty, index) => {
          return (
            <Paper key={index}>
              <InfoBlock
                type={"FACULTY"}
                info={faculty.name}
                onDelete={onDeleteFaculty}
                onEdit={onEditFaculty}
              />
            </Paper>
          );
        })}
      </div>

      {showForm && (
        <Paper>
          <FacultiesForm onAddFaculty={onAddFaculty} />
        </Paper>
      )}

      <Button
        icon={<AiFillPlusCircle />}
        text={"ADD FACULTY"}
        onClick={onShowForm}
      />
    </div>
  );
}
