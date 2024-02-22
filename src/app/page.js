import Enter from "@/components/Enter";
import Header from "../components/Header";
import Maps from "../components/maps";
import { useState } from "react";

const page = () => {
  const [isLocation, setIsLocation] = useState("");
  const handleNameSubmit = (location) => {
    setIsLocation(location);
  };

  return (
    <div className="flex flex-col">
      {isLocation ? (
        <div>
          <Header /> <Maps name={isLocation} />{" "}
        </div>
      ) : (
        <Enter onSubmit={handleNameSubmit} />
      )}
    </div>
  );
};

export default page;
