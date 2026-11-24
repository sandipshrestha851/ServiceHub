"use client"
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Carausel from '../components/home/Carausel'
import ServiceCategory from '../components/home/ServiceCategory'
import Steps from '../components/home/Steps'
import Providers from '../components/home/Providers'
import AboutSection from '../components/home/About'
import FeaturedServices from '../components/home/FeaturedServices'
import FeedbackSection from '../components/home/Feedback'
import ProviderBanner from '../components/ui/ProviderBanner'
import Footer from '../components/layout/Footer'

const homepage = () => {
  return (
    <div className="bg-[#F8FAFC] h-screen overflow-y-auto scroll-smooth">
        <Navbar/>
        <Carausel/>
        <ServiceCategory/>
        <FeaturedServices/>
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
