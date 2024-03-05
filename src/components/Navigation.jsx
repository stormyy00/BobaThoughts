"use client";
import { useEffect } from "react";
import "../styles/nav.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import DefaultUserImg from "../../public/user-icon.svg";
import { UserAuth } from "../context/AuthContext";
import { items } from "../data/nav.js";
import Button from "./Button";

const Navigation = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, [user]);

  return (
    <header className="flex h-[15vh] justify-between items-center py-x px-8 text-center bg-gradient-to-r from-gray-400 to-black/60">
      {/* need to make a map here */}
      <Link href="/">
        <Image src={Logo} alt="Logo" className="scale-75" />
      </Link>

      <div className="w-9/12 flex flex-cols justify-end h-full items-center gap-6">
        {items.map((item, index) => (
          <div key={index} className=" hover:scale-110 duration-300 ">
            <Button text={item.name} path={item.link} />
          </div>
        ))}
      </div>

      {user ? (
        <div className="flex flex-row mx-4 rounded-3xl ml-9">
          <Image
            src={user?.photoURL || DefaultUserImg}
            width={50}
            height={50}
            className="rounded-l-full -ml-2 "
          />
          {/* <div className="px-0 pt-5 mx-2 text-sm">{user.email}</div> */}
          {/* maybe had on hover effect to display email */}

          <button
            className="place-items-center text-white bg-red-600 font-medium rounded-r-full text-xs px-5 py-3.5 -me-2 mb-0 mr-2"
            onClick={handleSignOut}
          >
            Log out
          </button>
        </div>
      ) : (
        <Button text="Sign In" path="/signin" />
      )}
    </header>
  );
};

export default Navigation;

// <Link
//   href="/signin"
//   className="place-self-center text-white bg-gray-800 font-medium rounded-full text-xl px-5 py-1.5 me-5 mb-2 mr-2 h-full"
// >
//   Sign In
// </Link>
