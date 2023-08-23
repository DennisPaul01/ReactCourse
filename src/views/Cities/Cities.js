import React, { useState, useEffect } from "react";
import Paper from "../../components/Paper/Paper";

import Button from "../../components/Button/Button";

import { AiFillPlusCircle } from "react-icons/ai";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import style from "./Cities.module.css";
import CitiesForm from "../../components/Forms/CitiesForm/CitiesForm";

import { citiesApi } from "../../api/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default function Cities() {
  const [cities, setCities] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onShowForm = () => {
    setShowForm(!showForm);
  };

  const onAddCity = async (city) => {
    try {
      const response = await citiesApi.create({ name: city });
      setCities((prev) => [...prev, response.data]);
      setShowForm(false);
    } catch (error) {
      setError("Eroare la adaugarea unui oras nou");
    }

    setShowForm(false);
  };

  const onDeleteCity = async (id) => {
    try {
      await citiesApi.delete(id);
      setCities((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      setError("Erroare la stergerea unui city.");
    }
  };

  const onEditCity = async (id, newCity) => {
    try {
      const response = await citiesApi.update(id, { name: newCity });
      setCities((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      setError("Eroare la edit city");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await citiesApi.getAll();
        setCities(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("Este o problema la /cities");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
