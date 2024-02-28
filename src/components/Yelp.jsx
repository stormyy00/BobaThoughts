"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const YelpSearch = () => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/api/fetch?term=${searchTerm}&location=${location}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setBusinesses(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [searchTerm, location]);

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
