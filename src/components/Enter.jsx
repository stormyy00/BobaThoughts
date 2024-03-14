"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";

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
    <div className="h-screen flex flex-cols items-center justify-center gap-20 ">
      <Image src={Logo} alt="Logo" className="scale-125 mr-64" />
      <div className="flex flex-cols gap-2 justify-end">
        <input
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Enter a location"
          className="border-2 border-black bg-transparent rounded-md p-2 mb-4 placeholder:text-black "
          cy-data="input"
        />
        <button
          type="button"
          onClick={handleSubmit}
          onChange={handleChange}
          className="bg-gray-500 text-black rounded-xl px-4 py-4 mb-4  hover:bg-gray-500/70"
          cy-data="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Enter;

//   <form
//     onSubmit={handleSubmit}
//     className="flex flex-cols gap-2 justify-end"
//   >
//     <input
//       type="text"
//       onChange={handleChange}
//       placeholder="Enter a location"
//       className="border-2 border-black bg-transparent rounded-md p-2 mb-4 placeholder:text-black "
//       cy-data="input"
//     />
//     <button
//       type="submit"
//       className="bg-gray-500 text-black rounded-xl px-4 py-4 mb-4  hover:bg-gray-500/70"
//       cy-data="button"
//     >
//       Submit
//     </button>
//   </form>
