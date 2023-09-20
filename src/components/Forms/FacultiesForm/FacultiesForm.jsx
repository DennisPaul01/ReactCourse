import React, { useState } from "react";
import style from "./FacultiesForm.module.css";
import { useDispatch } from "react-redux";
import { addFaculty } from "../../../redux/operations";

export default function FacultiesForm({ onAddFaculty }) {
  const [faculty, setFaculty] = useState("");
  const dispatch = useDispatch();

  console.log(faculty);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit form");

    // trimitere catre redux store (slice faculties)
    dispatch(addFaculty(faculty));
  };

  return (
    <div className={style.container}>
      <h3>Add a faculty!</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="faculty"
            placeholder="Faculty*"
            required
            value={faculty}
            onChange={(event) => setFaculty(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
