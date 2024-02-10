import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Info from '../Info/Info'

export default function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Info />
    <Footer />
    </>
  )
}
