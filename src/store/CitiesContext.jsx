import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useMemo,
} from "react";

import { citiesApi } from "../api/api";

const CitiesContext = createContext();

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onAddCity = async (city) => {
    try {
      const response = await citiesApi.create({ name: city });
      setCities((prev) => [...prev, response.data]);
    } catch (error) {
      setError("Eroare la adaugarea unui oras nou");
    }
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

  const contextValue = useMemo(
    () => ({
      cities,
      isLoading,
      error,
      onAddCity,
      onDeleteCity,
      onEditCity,
    }),
    []
  );
  return (
    <CitiesContext.Provider value={contextValue}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  return useContext(CitiesContext);
}
