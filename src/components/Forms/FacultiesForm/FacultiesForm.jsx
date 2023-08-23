import React, { useState } from "react";
import style from "./FacultiesForm.module.css";

export default function FacultiesForm({ onAddFaculty }) {
  const [faculty, setFaculty] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddFaculty(faculty);
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
