import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './components/hero'
import Login from './components/login';
import Account from './components/account';
import CreatePage from './components/createaccount';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/createaccount" element={<CreatePage />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default App
