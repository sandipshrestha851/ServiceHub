"use client"
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Carausel from '../components/home/Carausel'
import Services from '../components/home/Services'
import Steps from '../components/home/Steps'

const homepage = () => {
  return (
    <div className="bg-[#F8FAFC]">
        <Navbar/>
        <Carausel/>
        <Services/>
        <Steps/>
    </div>
  )
}

export default homepage
