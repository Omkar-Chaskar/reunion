import {
    useContext,
    createContext,
    useReducer
  } from "react";
  
  import {
    Compose,
    filterLocation,
    filterFurnished,
    filterPrice,
    filterArea,
    filterBedrooms,
    filterParking,
    filterBathrooms
  } from "../utils/filter";
  
  import { filterReducer } from "../reducer/filterReducer";
  import productData from "../data/product_data";
  
  const FilterContext = createContext();
  const useFilter = () => useContext(FilterContext);
  
  const FilterProvider = ({ children }) => {
  
    const [filterState, filterDispatch] = useReducer(filterReducer, {
      location : "",
      furnished: "",
      rent: "",
      sqft: "",
      bed: "",
      parking: "",
      bathroom: ""
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
    )(productData);
    console.log(productData)
    console.log(filteredProducts);
  
    return (
      <FilterContext.Provider
        value={{ product: filteredProducts, filterState, filterDispatch }}
      >
        {children}
      </FilterContext.Provider>
    );
  };
  
  export { FilterProvider, useFilter };