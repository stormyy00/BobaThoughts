import About from "@/components/About";
import React from "react";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <About />
    </div>
  );
};

export default page;
