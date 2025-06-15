import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="w-full h-screen flex items-center justify-center min-[426px]:bg-gray-100">
            <div className="w-full flex justify-start items-end bg-white rounded-lg m-2 p-2 min-[426px]:p-4 min-[426px]:m-5 min-[425px]:w-[300px]  text-center min-[426px]:shadow-2xl" >
                <div className="w-full h-full ">

                    {/* Image Section */}
                    <div className="w-full flex justify-center mt-2 mb-6">
                        <img
                            src="https://pbs.twimg.com/profile_images/1925170543675752448/OLq1PEHo_400x400.jpg"
                            alt="PopX Logo"
                            className="w-60 h-60 rounded-full min-[425px]:w-70 min-[425px]:h-70 min-[426px]:rounded-2xl " style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.7)'}}
                        />
                    </div>
                    <div className='w-full'>
                        {/* Text Section */}
                        <div className="w-full text-left px-2 py-5">
                            <h1 className="min-[426px]:text-lg text-[35px] font-bold font-sans">Welcome to PopX</h1>
                            <p className="min-[426px]:text-sm text-[20px] text-gray-700 font-sans">
                                Discover amazing content <br /> and connect with us.
                            </p>
                        </div>

                        {/* Button Section */}
                        <div className="w-full flex flex-col mt-4">
                            <Link
                                to='/createaccount'
                                className="w-full text-sm text-white font-semibold bg-violet-800 rounded mb-2 p-2">
                                Create Account
                            </Link>
                            <Link
                                to="/login"
                                className="w-full text-sm font-semibold text-black rounded p-2"
                                style={{ backgroundColor: '#DF73FF' }}
                            >
                                Already Registered? Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
