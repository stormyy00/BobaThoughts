import Image from "next/image";
import Maps from "../components/maps";
import Logo from "../../public/logo.svg";
import Header from "../components/Header";


const page = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Maps />
    </div>
  );
};

export default page;