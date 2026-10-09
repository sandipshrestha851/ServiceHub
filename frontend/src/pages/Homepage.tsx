"use client"
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Carausel from '../components/home/Carausel'
import Services from '../components/home/Services'
import Steps from '../components/home/Steps'
import Providers from '../components/home/Providers'
import AboutSection from '../components/home/About'
import FeedbackSection from '../components/home/Feedback'

const homepage = () => {
  return (
    <div className="bg-[#F8FAFC]">
        <Navbar/>
        <Carausel/>
        <Services/>
        <Steps/>
        <Providers/>
        <AboutSection/>
        <FeedbackSection/>
    </div>
  )
}

export default homepage
