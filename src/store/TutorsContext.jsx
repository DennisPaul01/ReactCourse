import React, { useContext, createContext, useState, useEffect } from "react";

import { tutorApi } from "../api/api";

const TutorsContext = createContext();

export function TutorsProvider({ children }) {
  const [tutors, setTutors] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onAddTutor = async (tutor) => {
    try {
      const response = await tutorApi.create(tutor);
      setTutors((prev) => [...prev, response.data]);
    } catch (error) {
      setError("A aparut o eroare la creearea unui tutore!");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await tutorApi.getAll();
        setTutors(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("A aparut o erroare la cererea catre /tutors");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const contextValue = { tutors, isLoading, error, onAddTutor };

  return (
    <TutorsContext.Provider value={contextValue}>
      {children}
    </TutorsContext.Provider>
  );
}

export function useTutors() {
  return useContext(TutorsContext);
}
