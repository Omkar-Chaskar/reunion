import React from "react";
import { useFilter } from "../context/filter-provider";

function FilterBar() {
  const {filterState ,filterDispatch} = useFilter();

  return (
    <div className="w-max h-max shadow mt-3 p-6 bg-white" >

      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
        onClick={() => filterDispatch({ type: "CLEAR" })}>
          Reset Filter
        </button>
      </div>

      <div>
        <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-4 mt-4">
          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_LOCATION",
              payload: e.target.value});
            }
          }
          value = {filterState.location}
          >
            <option value="">Location</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_FURNISH",
              payload: e.target.value})
          }
          value = {filterState.furnish}
          >
            <option value="">Furnish Type</option>
            <option value="fully-furnished">Fully Furnished</option>
            <option value="partially-furnished">Partially Furnished</option>
            <option value="not-furnished">Not Furnished</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_PRICE",
              payload: e.target.value})
          }
          value = {filterState.rent}
          >
            <option value="9999">Any Price</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_AREA",
              payload: e.target.value})
          }
          value = {filterState.sqft}
          >
            <option value="9999">Floor Area</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_BEDROOMS",
              payload: e.target.value})
          }
          value = {filterState.bed}
          >
            <option value="9">Bedrooms</option>
            <option value="1">1 bedroom</option>
            <option value="2">2 bedrooms</option>
            <option value="3">3 bedrooms</option>
            <option value="4">4 bedrooms</option>
            <option value="5">5 bedrooms</option>
            <option value="6">6 bedrooms</option>
            <option value="7">7 bedrooms</option>
            <option value="8">8 bedrooms</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_PARKING",
              payload: e.target.value})
          }
          value = {filterState.parking}
          >
            <option value="9">Parking</option>
            <option value="1">1 Vehicle</option>
            <option value="2">2 Vehicle</option>
            <option value="3">3 Vehicle</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_BATHROOMS",
              payload: e.target.value})
          }
          value = {filterState.bathroom}
          >
            <option value="9">Bathrooms</option>
            <option value="1">1 space</option>
            <option value="2">2 space</option>
            <option value="3">3 space</option>
            <option value="4">4 space</option>
            <option value="5">5 space</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
