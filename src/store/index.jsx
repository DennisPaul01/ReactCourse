import React from "react";

import { CitiesProvider } from "./CitiesContext";
import { TutorsProvider } from "./TutorsContext";
import { FacultiesProvider } from "./FacultiesContext";

export default function StoreProvider({ children }) {
  return (
    <>
      <FacultiesProvider>
        <TutorsProvider>
          <CitiesProvider>{children}</CitiesProvider>
        </TutorsProvider>
      </FacultiesProvider>
    </>
  );
}
