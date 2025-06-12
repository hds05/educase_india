import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// Import your icons properly, e.g. from '@mui/icons-material' if you use Material UI
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const { email, password } = user // destructure for convenience

  // Update user state on input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Button enabled only if both fields filled
  const canLogin = email.trim() !== '' && password.trim() !== ''

  const handleLogin = () => {
    if (canLogin) {
      console.log('Logging in with:', { email, password })
      navigate('/account')
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex justify-start items-end bg-white shadow-lg rounded-lg p-4 m-5 min-w-[300px] max-w-lg text-center h-[500px]">
        <div className="w-full font-sans flex flex-col mt-2 items-start h-full">
          {/* SignIn heading */}
          <h1 className="font-bold text-xl mb-1">
            Signin to your <br />
            PopX account
          </h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
          </p>

          {/* Input Section */}
          <form className="w-full flex flex-col mt-4 relative">
            <div className="text-violet-800 relative top-3 left-2 bg-white w-fit text-xs p-1">
              Email Address
            </div>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={handleChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            <div className="text-violet-800 relative top-3 left-2 bg-white w-fit text-xs p-1">
              Password
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            {/* Password toggle button */}
            <button
              type="button"
              className="absolute right-2 top-[80%] transform -translate-y-1/2 text-gray-500"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <VisibilityOffIcon style={{ color: 'grey' }} />
              ) : (
                <VisibilityIcon style={{ color: 'black' }} />
              )}

            </button>
          </form>

          {/* Login Button */}
          <div className="w-full flex flex-col mt-4">
            <button
              type="button"
              onClick={handleLogin}
              disabled={!canLogin}
              className={`w-full text-sm font-semibold rounded mb-2 p-2 ${canLogin
                  ? 'bg-violet-800 text-white hover:bg-violet-900 cursor-pointer'
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
