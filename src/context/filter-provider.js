import { useContext, createContext, useReducer } from "react";

import {
  Compose,
  filterLocation,
  filterFurnished,
  filterPrice,
  filterArea,
  filterBedrooms,
  filterParking,
  filterBathrooms,
} from "../utils/filter";

import { filterReducer } from "../reducer/filterReducer";
import ProductData from "../data/product_data";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    location: "",
    furnished: "",
    rent: "9999",
    sqft: "9999",
    bed: "9",
    parking: "9",
    bathroom: "9",
  });

  const filteredProducts = Compose(
    filterState,
    filterLocation,
    filterFurnished,
    filterPrice,
    filterArea,
    filterBedrooms,
    filterParking,
    filterBathrooms
  )(ProductData);

  return (
    <FilterContext.Provider
      value={{ product: filteredProducts, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
