"use client";
import { useState } from "react";

const Enter = ({ onSubmit }) => {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(location);
    console.log(location);
  };

  return (
    <div className="h-full w-full flex items-center justify-center backdrop-blur-xl bg-white/30 z-50 absolute">
      <div className="flex flex-cols gap-2">
        <input
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Enter a location"
          className="border-2 border-black bg-transparent rounded-md p-2 mb-4 placeholder:text-black "
        />
        <button
          onClick={handleSubmit}
          onChange={handleChange}
          className="bg-gray-700 text-black rounded-xl px-4 py-4 mb-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Enter;
