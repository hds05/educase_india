import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check all required fields
    if (!form.fullName || !form.phone || !form.email || !form.password || !form.agency) {
      alert('Please fill in all required fields.')
      return
    }

    // Additional validation can go here
    console.log('Form submitted:', form)

    // Navigate to login
    navigate('/login')
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex justify-start items-end bg-white shadow-lg rounded-lg p-4 m-5 min-w-[300px] max-w-lg text-center h-[500px]">
        <div className="w-full font-sans flex flex-col justify-between mt-2 items-start h-full">
          <div className='w-full'>
            <h1 className="font-bold text-left text-xl mb-1">
              Create your <br />
              PopX account
            </h1>
            <div className='w-full h-full text-left'>
              <form className='flex flex-col items-start justify-evenly w-full h-full' onSubmit={handleSubmit}>
                <div className='w-full'>
                  {/* Full Name */}
                  <div className="text-violet-800 relative top-1.5 left-2 bg-white w-fit text-xs p-1">
                    Full Name<span className="text-red-500">*</span>
                  </div>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-1 py-0.3 mb-0.5 placeholder:text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />

                  {/* Phone Number */}
                  <div className="text-violet-800 relative top-1.5 left-2 bg-white w-fit text-xs p-1">
                    Phone Number<span className="text-red-500">*</span>
                  </div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type='number'
                    placeholder="Your phone number"
                    className="w-full px-1 py-0.3 mb-0.5 placeholder:text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />

                  {/* Email */}
                  <div className="text-violet-800 relative top-1.5 left-2 bg-white w-fit text-xs p-1">
                    Email address<span className="text-red-500">*</span>
                  </div>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type='email'
                    placeholder="Your email"
                    className="w-full px-1 py-0.3 mb-0.5 placeholder:text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />

                  {/* Password */}
                  <div className="text-violet-800 relative top-1.5 left-2 bg-white w-fit text-xs p-1">
                    Password<span className="text-red-500">*</span>
                  </div>
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    placeholder="Your password"
                    className="w-full px-1 py-0.3 mb-0.5 placeholder:text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />

                  {/* Company Name */}
                  <div className="text-violet-800 relative top-1.5 left-2 bg-white w-fit text-xs p-1">
                    Company name
                  </div>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    type='text'
                    placeholder="Your company name"
                    className="w-full px-1 py-0.3 mb-0.5 placeholder:text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />

                  {/* Radio Buttons */}
                  <p className="mt-2 mb-1 text-sm text-gray-700">
                    Are you an Agency?<span className="text-red-500">*</span>
                  </p>
                  <div className="flex items-center gap-6 mb-4">
                    <label className="flex items-center gap-1 text-sm">
                      <input
                        type="radio"
                        name="agency"
                        value="yes"
                        checked={form.agency === 'yes'}
                        onChange={handleChange}
                        className="accent-violet-600"
                        required
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-1 text-sm">
                      <input
                        type="radio"
                        name="agency"
                        value="no"
                        checked={form.agency === 'no'}
                        onChange={handleChange}
                        className="accent-violet-600"
                      />
                      No
                    </label>
                  </div>
                </div>

                {/* Submit Button at the Bottom */}
                <button
                  type="submit"
                  className="w-full p-2 rounded-lg bg-violet-800 text-white text-semibold text-center"                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
