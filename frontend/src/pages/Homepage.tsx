"use client"
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Carausel from '../components/home/Carausel'

const homepage = () => {
  return (
    <div className="bg-[#F8FAFC]">
        <Navbar/>
        <Carausel/>
    </div>
  )
}

export default homepage
