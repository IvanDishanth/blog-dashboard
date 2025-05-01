import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Compount/Navbar'
import LoginPage from './Pages/Loginpage'
import Userdashboard from './Pages/Userdashboard'
import Admindashboard from './Pages/Admindashboard'
import Addblog from './Pages/create'
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/blog-dashboard-ui" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<Userdashboard />} />
        <Route path="/admin-dashboard" element={<Admindashboard />} />
        <Route path="/add-blog" element={<Addblog />} />
      </Routes>
    </>
  )
}

export default App
