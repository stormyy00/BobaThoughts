"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./Header";
import addFavorite from "@/firebase/firestore/addFavorite";
import redheart from "../../public/red-heart-icon.svg";
import whiteheart from "../../public/white-heart.svg";
import { getAuth } from "firebase/auth";

const Information = () => {
  const [businesses, setBusinesses] = useState([]);
  const [address, setAddress] = useState("");
  const [term, setTerm] = useState("");
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setAddress(urlParams.get("address"));
    setTerm(urlParams.get("term"));
  }, []);

  const fetchBusinesses = async () => {
    try {
      const response = await fetch(
        `https://proxy.cors.sh/https://api.yelp.com/v3/businesses/search?location=${address}&term=${term}`,
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
      setBusinesses(data.businesses[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch businesses when the component mounts or when address changes
  useEffect(() => {
    if (address && term) {
      fetchBusinesses();
    }
  }, [address, term]);

  const handleFavorite = async (business) => {
    setFavoriteStatus((prevStatus) => ({
      ...prevStatus,
      [business.name]: !prevStatus[business.name],
    }));

    // Call addFavorite function to add business to favorites
    try {
      const { result, error } = await addFavorite(
        "favorites",
        user.uid,
        business.name,
      );
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
    <>
      <Header />
      <div className="flex items-center flex-col h-full bg-red-400">
        Business Details for {address} || {term}
        <div className="flex w-6/12 h-1/4 flex-col items-center bg-lime-300">
          <p className="text-2xl font-bold">{businesses.name}</p>
          <p>Rating: {businesses.rating}</p>
          <button
            onClick={() => handleFavorite(businesses)}
            className={`my-2 hover:scale-110 duration-300 ${favoriteStatus[businesses.name] ? "red-heart" : ""}`}
          >
            <Image
              src={favoriteStatus[businesses.name] ? redheart : whiteheart}
              width={40}
              height={40}
              alt="heart"
            />
          </button>
          <div className="flex justify-center mb-10 mt-2">
            <img
              src={businesses.image_url}
              alt="image"
              className="w-72 h-full object-cover  bg-sky-200"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
