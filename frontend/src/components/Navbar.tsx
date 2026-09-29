"use client"

import React from 'react'
import {usePathname} from 'next/navigation';


const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between px-8 py-8 border-b border-b-[#E2E8F0]">
        <div className="left-items flex flex-col gap-2">
            <div className="logo">
                <img src="/next.svg" alt="logo" className="w-20" />
            </div>
            <div className="navigations">
              <ul className = "flex gap-5 text-lg text-[#64748B]  ">
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
                <li className="flex gap-1 items-center text-lg hover:underline cursor-pointer text-[#64748B] hover:text-[hsl(215,16%,37%)]"><img src="" alt="sparkle" />Join as a Pro</li>
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
