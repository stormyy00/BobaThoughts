"use client"
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import getFavorites from "@/firebase/firestore/getFavorite";
import deleteFavorite from "@/firebase/firestore/deleteFavorite";

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
        <h2>Favorite Restaurants</h2>
        <ul>
          {favoriteRestaurants.map((restaurant, index) => (
            <li key={index}>
              {restaurant}
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => handleButtonClicked(restaurant)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;

