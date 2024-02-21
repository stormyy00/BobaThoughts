import React from "react";
import Header from "../components/Header";

const Signin = () => {
  return (
    <div>
        <Header/>
            <div className="w-full flex items-center justify-center lg:2-1/2">
                <div className='bg-[#edf1f6] px-10 py-19 rounded-3xl'>
                    <h1 className='text-3xl font-semibold flex items-center justify-center mt-5'>Welcome back!</h1>
                    <p className='font-medium text-lg text-gray-500 flex items-center justify-center'>Please enter your account</p>
                    <div className = 'mt-8'>
                        <div>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                className='w-full border-2 border-black-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder='Enter your email'
                            />
                        </div>
                        <div>
                            <label className='text-lg font-medium'>Password</label>
                            <input
                                className='w-full border-2 border-black-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder='Enter your password'
                            />
                        </div>
                        <div className='mt-8 flex justify-between items-center'>
                            <div>
                                <input
                                    type="checkbox"
                                    id='remember'
                                />
                                <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
                            </div>
                            <button className='ml-2 font-medium text-base text-blue-600'>Forgot password</button>
                        </div>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button className='hover:scale-[1.01] ease--in-out transition-all py-3 rounded-xl bg-gray-300 text-lg font-bold'>Sign in</button>
                        <button>Sign in with Google</button>
                    </div>
                    <div className= 'mt-8 mb-3 flex justify-center items-center'>
                        <p className='font-medium text-base'>Don't have an account?</p>
                        <button className='text-blue-600 text-base font-medium ml-2'>Sign up</button>
                    </div>
                </div>
            </div>
    </div>
  );
};
export default Signin;