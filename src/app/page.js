import Image from "next/image";
import Maps from "./maps";
import Logo from "../../public/logo.svg";
import Signin from "../components/Signin";

const page = () => {
  return (
    <div className="flex flex-col">
      <Signin />

    </div>
  );
};

export default page;
