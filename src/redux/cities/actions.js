import { nanoid } from "nanoid";

export const addCity = (city) => {
  return {
    type: "cities/addCity",
    payload: {
      id: nanoid(),
      name: city,
    },
  };
};

export const deleteCity = (id) => {
  return {
    type: "cities/deleteCity",
    payload: {
      id: id,
    },
  };
};

export const editCity = (id, newCity) => {
  return {
    type: "cities/editCity",
    payload: {
      id: id,
      newCity: newCity,
    },
  };
};
