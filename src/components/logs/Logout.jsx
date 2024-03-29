"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import Header from "../Header";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";

const Logout = () => {
  const { googleSignIn } = UserAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };

  const handleGSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full flex items-center justify-center mt-10 lg:2-1/2">
        <div className="bg-[#edf1f6] px-10 py-19 rounded-3xl">
          <h1 className="text-3xl font-semibold flex items-center justify-center mt-5">
            Welcome!
          </h1>
          <p className="font-medium text-lg text-gray-500 flex items-center justify-center">
            Please enter your information
          </p>
          <form onSubmit={handleForm} className="mt-8 form">
            <div>
              <label htmlFor="email" className="text-lg font-medium">
                Email
              </label>
              <input
                className="w-full border-2 border-black-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-lg font-medium">
                Password
              </label>
              <input
                className="w-full border-2 border-black-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
              />
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="hover:scale-[1.01] ease--in-out transition-all py-3 rounded-xl bg-gray-300 text-lg "
              >
                Sign up
              </button>
              <button
                className="hover:scale-[1.01] ease--in-out transition-all py-3 rounded-xl bg-gray-300 text-lg"
                onClick={handleGSignIn}
              >
                Sign in with Google
              </button>
            </div>
          </form>
          <div className="mt-8 mb-3 flex justify-center items-center">
            <p className="font-medium text-base">Already have an account?</p>
            <Link href="/signin">
              <button className="text-blue-600 text-base font-medium ml-2">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logout;
