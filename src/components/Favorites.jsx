"use client"
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import getFavorites from "@/firebase/firestore/getFavorite";
import deleteFavorite from "@/firebase/firestore/deleteFavorite";
import Yelp from "../components/yelp";
import Image from "next/image";
const Favorites = () => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

  useEffect(() => {
    // Fetch favorites when the component mounts
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const favorites = await getFavorites(); // Call the function to fetch favorites
      setFavoriteRestaurants(favorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const handleButtonClicked = async (restaurantName) => {
    try {
      // Delete the favorite restaurant
      await deleteFavorite(restaurantName);
      
      // After deletion, re-fetch the list of favorite restaurants
      fetchFavorites();
    } catch (error) {
      console.error("Error deleting favorite restaurant:", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h2 className="font-bold text-3xl bg-[#edf1f6] border-1 border-black bg-font-bold flex items-center justify-center w-full text-black "> Favorite Restaurants</h2>
        <div className="w-full flex items-center justify-center lg:3 mt-5">
        <div className="bg-[#f6f6f6] border-2 rounded-3xl">
        <div className="flex items-center justify-center text-black mb-5 ml-5 mr-5">

          <ul className="font-bold">
            {favoriteRestaurants.map((restaurant, index) => (
              <li key={index} className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                <span>{restaurant}</span>
              </div>
              <button
                className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl ml-2"
                onClick={() => handleButtonClicked(restaurant)}
              >
                delete
              </button>
            </li>
            ))}
          </ul>
        </div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Favorites;


