"use client";
import React, { useEffect } from 'react';
import Logo from "../../public/logo.svg";
import DefaultUserImg from "../../public/user-icon.svg";
import Image from "next/image";
import Link from 'next/link';
import { UserAuth } from "../context/AuthContext";

const Header = () => {
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
    <section>
        <header className="flex justify-between items-center py-x px-8 text-center bg-[#edf1f6]">
          <Link href="/">
              <Image src={Logo} alt="Logo" className="z-0 m-2" />
          </Link>
          {user ? (
            <div className="flex flex-row">
              <Image src={user?.photoURL || DefaultUserImg} width={50} height={50}/>
              <div className='px-8 pt-3'>{user.email}</div>
              <button className="place-self-center text-white bg-red-600 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 mr-2 h-full" onClick={handleSignOut}>Log out</button>
            </div>
          ) : (
            <Link href="/signin" className="place-self-center text-white bg-gray-800 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 mr-2 h-full">Sign In</Link>
          )}
          
        </header>
    </section>
    
  );
};