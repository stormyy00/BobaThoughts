"use client";
import { useState, useEffect } from "react";
import TextBox from "./TextBox";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import addFavorite from "@/firebase/firestore/addFavorite";
import redheart from "../../public/red-heart-icon.svg";
import whiteheart from "../../public/white-heart.svg";
import { getAuth } from "firebase/auth";

const YelpSearch = () => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const auth = getAuth();
  const user = auth.currentUser;

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

  const handleFavorite = async (business) => {
    setFavoriteStatus((prevStatus) => ({
      ...prevStatus,
      [business.name]: !prevStatus[business.name],
    }));

    // Call addFavorite function to add business to favorites
    try {
      const { result, error } = await addFavorite("favorites", user.uid, business.name);
      if (error) {
        console.log("Error adding to favorites:", error);
      } else {
        console.log("Added to favorites:", result);
      }
    } catch (error) {
      console.log("Error adding to favorites:", error);
    }
  };

  return (
    <div className="flex flex-col justify center w-full text-black">
      <Header />
      <div className="flex flex-col items-center gap-0">
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
          className="bg-red-300 h-10 w-1/12 rounded-xl mt-5 mb-5 border-2 border-black hover:scale-110 duration-300"
          onClick={handleSearch}
          data-testid="search-button"
        >
          Search
        </button>
      </div>

      {businesses.businesses && businesses.businesses.length > 0 ? (
        <div
          className="bg-green-300 grid grid-cols-3"
          data-testid="search-results"
        >
          {businesses.businesses.map((business, index) => (
            <div
              key={index}
              className="flex flex-cols-3 w-10/12 gap-0 mt-5 ml-11 bg-red-300 border-4 border-black mb-10 rounded-3xl justify-center duration-300"
            >
              <div className="flex flex-col items-center mt-3 -mb-9">
                <Link href={business.url}>
                  <p className="text-xl font-bold hover:scale-110 duration-300">
                    {business.name}
                  </p>
                </Link>
                <div>Rating: {business.rating}</div>
                <div>
                  Location: {business.location.address1},{" "}
                  {business.location.city}
                </div>
                <button
                  onClick={() => handleFavorite(business)}
                  className={`my-2 hover:scale-110 duration-300 ${favoriteStatus[business.name] ? 'red-heart' : ''}`}
                >
                  <Image src={favoriteStatus[business.name] ? redheart : whiteheart} width={40} height={40} alt="heart" />
                </button>
                <img
                  src={business.image_url}
                  alt="image"
                  className="w-full h-full scale-75 object-cover -mt-12"
                />
              </div>
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
