"use client";
import { useState, useEffect } from "react";
import TextBox from "./TextBox";

const YelpSearch = () => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (value) => {
    setSearchTerm(value);
  };
  const handleChange1 = (value) => {
    setLocation(value);
  };
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://proxy.cors.sh/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`,
        {
          headers: {
            Authorization:
              "Bearer oMxyNN8K_x1GTfigxjR0npSd3la7VETdEJYq6MqczLVfIx3fYPjkIJLp6qqaXjPjSrcA_R5tsAR5mTpiHX8DIgUbr7fetqGuNOD7F5RqVVwaUC3XFfmVEvUg2s3eZXYx",
            accept: "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            Origin: "localhost:3000",
            "x-cors-api-key": "temp_4407c675df9080e95c5e6bfd9e7089d8",
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setBusinesses(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //   useEffect(() => {
  //     handleSearch();
  //   }, [searchTerm, location]);

  return (
    <div className="flex flex-col justify center w-full text-black">
      <div className="flex flex-col items-center bg-blue-300 gap-0">
        <TextBox
          placeholder={"Enter business name"}
          value={searchTerm}
          onChange={handleChange}
          dataTestId="search-term"
        />
        <TextBox
          placeholder={"Enter location"}
          value={location}
          onChange={handleChange1}
          dataTestId="location"
        />
        <button
          className="bg-red-300 h-10 w-1/12 rounded-xl mt-5"
          onClick={handleSearch}
          data-testid="search-button"
        >
          Search
        </button>
      </div>

      {businesses.businesses && businesses.businesses.length > 0 ? (
        <div className="bg-green-300" data-testid="search-results">
          {businesses.businesses.map((business, index) => (
            <div key={index} className="flex flex-col">
              <p>{business.name}</p>
              <p>Rating: {business.rating}</p>
              <p>
                Location: {business.location.address1}, {business.location.city}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No businesses found</p>
      )}
    </div>
  );
};

export default YelpSearch;

{
  /* <input
  type="text"
  placeholder="Enter business name"
  value={searchTerm}
  onChange={handleChange}
  className="flex rounded-xl h-10 w-2/12 placeholder:justify-center"
/>
<input
  type="text"
  placeholder="Enter location"
  value={location}
  onChange={handleChange1}
  className="flex rounded-xl  h-10 w-2/12 "
/> */
}
