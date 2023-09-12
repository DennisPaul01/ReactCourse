const citiesInitialState = [
  { id: 1, name: "Kyiv" },
  { id: 2, name: "London" },
  { id: 3, name: "Timisoara" },
];

export const citiesReducer = (state = citiesInitialState, action) => {
  switch (action.type) {
    case "cities/addCity":
      return [...state, action.payload];
    case "cities/editCity":
      return state.map((item) =>
        item.id === action.payload.id
          ? { id: item.id, name: action.payload.newCity }
          : item
      );
    case "cities/deleteCity":
      console.log(action.payload);
      return state.filter((city) => city.id !== action.payload.id);
    default:
      return state;
  }
};

export const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
