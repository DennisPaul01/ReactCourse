import React, { useState, useEffect, useLayoutEffect } from "react";
import Paper from "../../components/Paper/Paper";

import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import style from "./Cities.module.css";
import CitiesForm from "../../components/Forms/CitiesForm/CitiesForm";

import { citiesApi } from "../../api/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useToggle } from "../../hooks/useToggle";

import { useCities } from "../../store/CitiesContext";

export default function Cities() {
  const { cities, isLoading, error, onAddCity, onDeleteCity, onEditCity } =
    useCities();

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
                    onDelete={onDeleteCity}
                    onEdit={onEditCity}
                  />
                </Paper>
              );
            })}
          </>
        )}
      </div>

      {isOpen && (
        <Paper>
          <CitiesForm onAddCity={onAddCity} closeModal={close} />
        </Paper>
      )}

      <Button icon={<AiFillPlusCircle />} text={"ADD CITY"} onClick={toggle} />
    </div>
  );
}
