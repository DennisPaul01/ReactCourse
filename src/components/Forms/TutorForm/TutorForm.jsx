import React, { useState } from "react";

import style from "./TutorForm.module.css";

export default function TutorForm({ onAddTutor }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [options, setOptions] = useState("");

  const handlerFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const formData = { firstName, lastName, phone, email, city, options };
    console.log(formData);
    onAddTutor(formData);
  };

  return (
    <div className={style.container}>
      <h4>Add Tutor</h4>
      <form onSubmit={handlerSubmit} className={style.form}>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            required
            value={firstName}
            onChange={handlerFirstName}
          />
        </label>
        <label>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name*"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Email*"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="City"
            placeholder="City*"
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="options"
            placeholder="Options*"
            required
            value={options}
            onChange={(event) => setOptions(event.target.value)}
          />
        </label>
        <button type="submit">Invite</button>
      </form>
    </div>
  );
}
