import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './components/hero'
import Login from './components/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default App
