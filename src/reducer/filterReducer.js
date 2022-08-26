export function filterReducer(filterState, action) {
  switch (action.type) {
    case "FILTER_BY_LOCATION":
      return {
        ...filterState,
        location: action.payload
      };

    case "FILTER_BY_FURNISH":
      return {
        ...filterState,
        furnish: action.payload
      };

    case "FILTER_BY_PRICE":
      return { ...filterState, rent: action.payload };

    case "FILTER_BY_AREA":
      return { ...filterState, sqft: action.payload };

    case "FILTER_BY_BEDROOMS":
      return { ...filterState, bed: action.payload };

    case "FILTER_BY_PARKING":
      return { ...filterState, parking: action.payload };

    case "FILTER_BY_BATHROOMS":
      return { ...filterState, bathroom: action.payload };

    case "CLEAR":
      return {
        location: "",
        furnished: "",
        rent: "9999",
        sqft: "9999",
        bed: "9",
        parking: "9",
        bathroom: "9",
      };

    default:
      return filterState;
  }
}
