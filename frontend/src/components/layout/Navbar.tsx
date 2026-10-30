"use client"

import React from 'react'
import {usePathname} from 'next/navigation';


const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#f8fafc]">
      <div className="navbar flex justify-between px-40 py-6 border-b-2 border-b-[#E2E8F0]">
        <div className="left-items flex flex-col gap-5">
            <div className="logo">
                <a href="/"><img src="/images/logo.png" alt="logo" className="w-40 cursor-pointer" /></a>
            </div>
            <div className="navigations">
              <ul className = "flex gap-5 text-lg text-[#64748B] font-semibold">
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="#home">Home</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="#services">Services</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="#how_it_works">How it works</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="#providers">Providers</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="#about">About</a></li>
              </ul>
            </div>
        </div>
        <div className="right-items flex gap-8 items-center">
            <ul className="non-buttons">
                <li className="flex font-semibold
                 gap-1 items-center text-lg hover:underline cursor-pointer text-[#64748B] hover:text-[hsl(215,16%,37%)]"><img src="/images/star.png" alt="star" className="w-8" />Join as a Pro</li>
            </ul>
            <ul className="buttons flex justify-between gap-4">
                <li><button className="register-btn py-1.5 px-4 text-lg rounded-[10px] font-semibold border border-[#E2E8F0] cursor-pointer text-[#0F172A] hover:bg-[hsl(0,0%,95%)]"><a href="/auth/login">Login</a></button></li>
                <li><button className="login-btn  py-1.5 px-7 text-lg rounded-[10px] bg-[hsl(221,83%,53%)] text-white font-semibold cursor-pointer hover:bg-[hsl(221,83%,48%)]"><a href="/auth/signup">Register</a></button></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
