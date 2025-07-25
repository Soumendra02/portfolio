import React from 'react'
import Navbar from './Portfolio/Home Page/Navbar'
import { Outlet } from 'react-router-dom'
import SidebarMenu from './Portfolio/Home Page/SidebarMenu'

const Layout = () => {
  return (
    <div className="min-h-screen bg-[rgb(12,14,34)] flex flex-col">
      <Navbar />
      <SidebarMenu/>
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
