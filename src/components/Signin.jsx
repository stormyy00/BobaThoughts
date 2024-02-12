import React from "react";
import Header from "../components/Header";


const Signin = () => {
  return (
    <div>
        <Header/>
        <div className=''>
            <h1 className='text-5xl font-semibold'>Welcome back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back!</p>
            <div className = 'mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className=''
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        className=''
                        placeholder='Enter your password'
                        type="password"
                    />
                </div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label for="remember">Remember for 30 days</label>
                    </div>
                    <button>Forgot password</button>
                </div>
            </div>
        </div>
  </div>

  );
};
export default Signin;