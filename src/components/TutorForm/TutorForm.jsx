import React from "react";

import style from "./TutorForm.module.css";

export default function TutorForm() {
  return (
    <div className={style.container}>
      <h4>Add Tutor</h4>
      <form className={style.form}>
        <label>
          <input type="text" name="surname" placeholder="Surname*" required />
        </label>
        <label>
          <input type="text" name="lastname" placeholder="lastname*" required />
        </label>
        <label>
          <input type="text" name="email" placeholder="email*" required />
        </label>
        <label>
          <input type="text" name="city" placeholder="city*" required />
        </label>
        <label>
          <input type="text" name="phone" placeholder="phone*" required />
        </label>
        <button type="submit">Invite</button>
      </form>
    </div>
  );
}
