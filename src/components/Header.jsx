import React from 'react';
import Logo  from "../../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <section>
        <header className="flex justify-between items-center py-x px-8 mb-8 text-center bg-[#edf1f6]">
            <div className= "mt-2">
            <Image src={Logo} alt="Logo" className="z-0" />
            </div>
        </header>
    </section>
    
  );
};

export default Header;