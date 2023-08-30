import React, { useContext, createContext } from "react";

const FacultiesContext = createContext();

export function FacultiesProvider({ children }) {
  const contextValue = {};
  return (
    <FacultiesContext.Provider value={contextValue}>
      {children}
    </FacultiesContext.Provider>
  );
}

export function useCities() {
  return useContext(FacultiesContext);
}
