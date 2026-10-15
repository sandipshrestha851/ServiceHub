"use client"
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Carausel from '../components/home/Carausel'
import Services from '../components/home/Services'
import Steps from '../components/home/Steps'
import Providers from '../components/home/Providers'
import AboutSection from '../components/home/About'
import FeedbackSection from '../components/home/Feedback'
import ProviderBanner from '../components/ui/ProviderBanner'
import Footer from '../components/layout/Footer'

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
        <ProviderBanner/>
        <Footer/>
    </div>
  )
}

export default homepage
