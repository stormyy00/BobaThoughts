import React from "react";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <section>
      <header className="flex justify-between items-center py-x px-8 mb-8 text-center bg-[#edf1f6]">
        <div className="mt-2">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="z-0" navigate="/page.js" />
          </Link>
        </div>
        <Link href="/yelp">
          <button className="bg-gray-300 text-black px8 py-3 font-bold tracking-widest text-lg rounded-full m-10 transition ease-in-out delay-150 hover:scale-[1.01]">
            yelp res
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-gray-300 text-black px8 py-3 font-bold tracking-widest text-lg rounded-full m-10 transition ease-in-out delay-150 hover:scale-[1.01]">
            Sign in
          </button>
        </Link>
      </header>
    </section>
  );
};

export default Header;
