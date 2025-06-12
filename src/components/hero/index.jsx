import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="flex justify-start items-end bg-white shadow-lg rounded-lg p-4 m-5 min-w-[300px] max-w-lg text-center h-[500px]">
                <div className="w-full flex flex-col items-center justify-between h-full">

                    {/* Image Section */}
                    <div className="w-full flex justify-center mt-2">
                        <img
                            src="https://pbs.twimg.com/profile_images/1925170543675752448/OLq1PEHo_400x400.jpg"
                            alt="PopX Logo"
                            className="w-70 h-70 rounded-2xl object-cover"
                        />
                    </div>
                    <div className='w-full'>
                        {/* Text Section */}
                        <div className="w-full text-left px-2">
                            <h1 className="text-lg font-bold font-sans">Welcome to PopX</h1>
                            <p className="text-sm text-gray-700 font-sans">
                                Discover amazing content <br /> and connect with us.
                            </p>
                        </div>

                        {/* Button Section */}
                        <div className="w-full flex flex-col mt-4">
                            <Link className="w-full text-sm text-white font-semibold bg-violet-800 rounded mb-2 p-2">
                                Create Account
                            </Link>
                            <Link
                                to="/login"
                                className="w-full text-sm font-semibold text-white rounded p-2"
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
