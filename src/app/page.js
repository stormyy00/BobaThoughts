import Image from "next/image";
import Maps from "../components/maps";
import Logo from "../../public/logo.svg";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Image src={Logo} alt="Logo" className="z-0" />
      <Maps />
    </div>
  );
};


export default page;
