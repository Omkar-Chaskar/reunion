const Compose = (filterState, ...functions) => (productData) =>
  functions.reduce((acc, cur) => cur(filterState, acc), productData);

const filterLocation = (filterState, productData) => {
  switch (filterState.location) {
    case "Pune":
      return [...productData].filter((item) => item.location === "Pune");
    case "Mumbai":
      return [...productData].filter((item) => item.location === "Mumbai");
    case "Delhi":
      return [...productData].filter((item) => item.location === "Delhi");
    default:
      return productData;
  }
};

const filterFurnished = (filterState, productData) => {
  switch (filterState.furnish) {
    case "fully-furnished":
      return [...productData].filter((item) => item.furnished === "Fully Furnished");
    case "partially-furnished":
      return [...productData].filter((item) => item.furnished === "Partially Furnished");
    case "not-furnished":
      return [...productData].filter((item) => item.furnished === "Not Furnished");
    default:
      return productData;
  }
};

const filterPrice = (filterState, productData) => {
    return [...productData].filter(
      (product) =>
        product.rent <= filterState.rent
    );
  };

  const filterArea = (filterState, productData) => {
    return [...productData].filter(
      (product) =>
        product.sqft <= filterState.sqft
    );
  };

  const filterBedrooms = (filterState, productData) => {
    return [...productData].filter(
      (product) =>
        product.bed <= filterState.bed
    );
  };

  const filterParking = (filterState, productData) => {
    return [...productData].filter(
      (product) =>
        product.parking <= filterState.parking
    );
  };

  const filterBathrooms = (filterState, productData) => {
    return [...productData].filter(
      (product) =>
        product.bathroom <= filterState.bathroom
    );
  };

export { Compose, filterLocation, filterFurnished, filterPrice, filterArea, filterBedrooms, filterParking, filterBathrooms };