"use client";
import { useState } from "react";

const YelpSearch = () => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/api/fetch/search?term=${searchTerm}&location=${location}`
      );
      const data = await response.json();
      setBusinesses(data.businesses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="flex flex-col justify center w-full text-black">
      <div className="flex flex-col items-center  bg-blue-300">
        <input
          type="text"
          placeholder="Enter business name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button className="bg-red-300" onClick={handleSearch}>
        Search
      </button>

      <div className="bg-green-300 ">
        {businesses.map((business, index) => (
          <div key={index} className="flex flex-col">
            <p>{business.name}</p>
            <p>Rating: {business.rating}</p>
            <p>
              Location: {business.location.address1}, {business.location.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YelpSearch;
