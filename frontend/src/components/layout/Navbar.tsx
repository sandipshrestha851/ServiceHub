"use client"

import React from 'react'
import {usePathname} from 'next/navigation';


const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between px-8 py-6 border-b border-b-[#E2E8F0] sticky">
        <div className="left-items flex flex-col gap-5">
            <div className="logo">
                <img src="/images/logo.png" alt="logo" className="w-40 cursor-pointer" />
            </div>
            <div className="navigations">
              <ul className = "flex gap-5 text-lg text-[#64748B] font-semibold">
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="">Home</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="">Services</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="">Providers</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="">How it works</a></li>
                <li className="hover:underline cursor-pointer hover:text-[hsl(215,16%,37%)]"><a href="">About</a></li>
              </ul>
            </div>
        </div>
        <div className="right-items flex gap-8 items-center">
            <ul className="non-buttons">
                <li className="flex font-semibold
                 gap-1 items-center text-lg hover:underline cursor-pointer text-[#64748B] hover:text-[hsl(215,16%,37%)]"><img src="/images/star.png" alt="star" className="w-8" />Join as a Pro</li>
            </ul>
            <ul className="buttons flex justify-between gap-4">
                <li><button className="register-btn py-1.5 px-4 text-lg rounded-[10px] font-semibold border border-[#E2E8F0] cursor-pointer text-[#0F172A] hover:bg-[hsl(0,0%,95%)]">Login</button></li>
                <li><button className="login-btn  py-1.5 px-7 text-lg rounded-[10px] bg-[hsl(221,83%,53%)] text-white font-semibold cursor-pointer hover:bg-[hsl(221,83%,48%)]">Register</button></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
