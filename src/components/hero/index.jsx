import React from 'react'

export default function Hero() {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
            <div className="flex justify-start items-end  bg-white shadow-lg rounded-lg p-3 m-5 min-w-[300px] max-w-lg text-center h-[500px]">
                <div className="w-full flex flex-col items-start">
                    <div className="flex flex-col items-start mb-4 p-0.5">
                        <h1 className="text-lg font-bold font-sans">Welcome to PopX</h1>
                        <p className="text-sm text-gray-700 text-left font-sans">Discover amazing content <br /> and connect with us.</p>
                    </div>
                    <button className="w-full text-sm text-white font-semibold bg-violet-800 rounded mb-1 p-2">Create Account</button>
                    <button className="w-full font-semibold text-sm bg-violet-500 rounded mb-1 p-2" style={{ backgroundColor: '#DF73FF' }} >Already Registered? Login</button>
                </div>
            </div>
        </div>
    )
}
