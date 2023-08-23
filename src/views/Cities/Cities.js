import React, { useState, useEffect } from "react";
import Paper from "../../components/Paper/Paper";

import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import style from "./Cities.module.css";
import CitiesForm from "../../components/Forms/CitiesForm/CitiesForm";

export default function Cities({ data }) {
  const [cities, setCities] = useState(data);
  const [showForm, setShowForm] = useState(false);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddCity = (city) => {
    setCities((prev) => [...prev, city]);
    setShowForm(false);
  };

  const onDeleteCity = (city) => {
    setCities((prev) => prev.filter((item) => item !== city));
  };

  const onEditCity = (city, newCity) => {
    setCities((prev) => prev.map((item) => (item === city ? newCity : item)));
  };

  useEffect(() => {
    const localStorageCities = JSON.parse(localStorage.getItem("cities"));
    setCities(localStorageCities);
  }, []);

  useEffect(() => {
    if (cities) localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  return (
    <div className={style.cities}>
      <h1>Cities</h1>
      <div>
        {cities?.map((city, index) => {
          return (
            <Paper key={index}>
              <InfoBlock
                type={"CITY"}
                info={city}
                onDelete={onDeleteCity}
                onEdit={onEditCity}
              />
            </Paper>
          );
        })}
      </div>

      {showForm && (
        <Paper>
          <CitiesForm onAddCity={onAddCity} />
        </Paper>
      )}

      <Button
        icon={<AiFillPlusCircle />}
        text={"ADD CITY"}
        onClick={onShowForm}
      />
    </div>
  );
}
