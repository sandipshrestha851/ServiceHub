"use client"
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Carausel from '../components/home/Carausel'
import Services from '../components/home/Services'

const homepage = () => {
  return (
    <div className="bg-[#F8FAFC]">
        <Navbar/>
        <Carausel/>
        <Services/>
    </div>
  )
}

export default homepage
