import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')

  const navigate = useNavigate()

  const { email, password } = user

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    // Clear email error as user types
    if (e.target.name === 'email') {
      setEmailError('')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const canLogin = email.trim() !== '' && password.trim() !== ''

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setEmailError('Invalid email format')
      return
    }

    console.log('Logging in with:', { email, password })
    navigate('/account')
  }

  return (
    <div className="w-full h-screen flex items-center justify-center min-[426px]:bg-gray-100">
      <div className="max-[426px]:w-full flex justify-start h-full items-end min-[426px]:h-[500px] bg-white min-[426px]:shadow-lg rounded-lg p-2 m-2 min-[426px]:p-4 min-[426px]:m-5 min-w-[300px] max-w-lg text-center">
        <div className="w-full h-full font-sans flex flex-col mt-2 items-start text-left">
          <h1 className="font-bold  text-[40px] mb-1 min-[426px]:text-xl">
            Signin to your <br />
            PopX account
          </h1>
          <p className=" text-[15px] mb-1 min-[426px]:text-sm text-gray-600">
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
          </p>

          <form
            className="w-full flex flex-col mt-4 relative"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-violet-800 relative top-3 left-2 bg-white w-fit text-xs p-1">
              Email Address
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={handleChange}
              className={`w-full p-2 mb-1 border rounded focus:outline-none focus:ring-2 ${
                emailError ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-violet-500'
              }`}
            />
            {emailError && <p className="text-red-500 text-[10px] absolute mb-2 ">{emailError}</p>}

            <div className="text-violet-800 relative top-3 left-2 bg-white w-fit text-xs p-1">
              Password
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

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

          <div className="w-full flex flex-col mt-4">
            <button
              type="button"
              onClick={handleLogin}
              disabled={!canLogin}
              className={`w-full text-sm font-semibold rounded mb-2 p-2 ${
                canLogin
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
