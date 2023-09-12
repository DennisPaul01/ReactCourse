import React, { useState, useEffect, useLayoutEffect } from "react";
import Paper from "../../components/Paper/Paper";

import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import style from "./Cities.module.css";
import CitiesForm from "../../components/Forms/CitiesForm/CitiesForm";

import { citiesApi } from "../../api/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useToggle } from "../../hooks/useToggle";

import { useCities } from "../../store/CitiesContext";

import { addCity, deleteCity, editCity } from "../../redux/cities/actions";
import { getCities } from "../../redux/cities/selectors";

export default function Cities() {
  const cities = useSelector(getCities);

  const { isLoading, error } = useCities();

  const { isOpen, open, close, toggle } = useToggle();

  return (
    <div className={style.cities}>
      <h1>Cities</h1>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {cities?.map((city, index) => {
              return (
                <Paper key={index}>
                  <InfoBlock
                    type={"CITY"}
                    id={city.id}
                    info={city.name}
                    onDelete={deleteCity}
                    onEdit={editCity}
                  />
                </Paper>
              );
            })}
          </>
        )}
      </div>

      {isOpen && (
        <Paper>
          <CitiesForm onAddCity={addCity} closeModal={close} />
        </Paper>
      )}

      <Button icon={<AiFillPlusCircle />} text={"ADD CITY"} onClick={toggle} />
    </div>
  );
}
