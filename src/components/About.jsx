import React from "react";

const About = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 text-2xl font-bold">
      About Us
      <div className="border-4 border-black w-2/5 h-2/5 rounded-3xl flex justify-center items-center pt-0 shadow-lg">
        <p className="w-8/12 font-normal text-lg hover:scale-110 duration-300">
          Boba Thoughts aims to provide a hub for boba enthusiasts to discover
          their new favorite locations that they can share with everyone, as
          well as uncover hidden gems.
        </p>
      </div>
    </div>
  );
};

export default About;
