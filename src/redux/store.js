import { createStore } from "redux";
import { combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { citiesReducer, filtersReducer } from "./cities/reducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  filters: filtersReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
