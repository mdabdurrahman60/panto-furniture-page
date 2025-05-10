import React from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <footer>Footer</footer>
    </>
  )
}

export default App