import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';


export default function Account() {
    const [selectedImage, setSelectedImage] = useState(
        'https://www.shutterstock.com/image-photo/headshot-close-face-portrait-young-600nw-2510015507.jpg'
    );

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImage(imageURL);
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-start bg-white shadow-lg rounded-lg m-5 min-w-[300px] max-w-lg text-center h-[500px]">
                <div
                    className="w-full font-sans bg-white flex flex-col items-start mb-3 p-5"
                    style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <h2 className="font-semibold">Account Setting</h2>
                </div>

                <div className="flex items-start gap-4 px-5">
                    {/* Label for clickable image */}
                    <div className="relative mb-2">
                        <label htmlFor="image-upload" className="cursor-pointer">
                            <img
                                src={selectedImage}
                                alt="Profile"
                                className="w-20 h-20 rounded-full border-2 border-white shadow-md object-cover"
                            />
                            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
                                <FaCamera className="text-white text-xs" />
                            </div>
                        </label>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="text-left">
                        <h4 className="font-bold mb-1">Marry Doe</h4>
                        <p className="text-xs text-gray-600">Marry@Gmail.com</p>
                    </div>

                    {/* Hidden input file */}
                    <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </div>
                <p className='text-xs max-w-[300px] p-3 text-left' style={{borderBottom:'1px dashed gray'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos tempora repellat eius nam, iure a ex aperiam. Lorem ipsum dolor sit. Lorem, dolor.</p>
            </div>
        </div>
    );
}
