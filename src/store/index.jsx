import React from "react";

import { CitiesProvider } from "./CitiesContext";

import { FacultiesProvider } from "./FacultiesContext";

export default function StoreProvider({ children }) {
  return (
    <>
      <FacultiesProvider>
        <CitiesProvider>{children}</CitiesProvider>
      </FacultiesProvider>
    </>
  );
}
