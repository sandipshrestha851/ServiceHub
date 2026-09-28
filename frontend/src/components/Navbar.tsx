"use client"

import React from 'react'
import {usePathname} from 'next/navigation';
import logo from "../../public/next.svg"

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between px-8">
        <div className="left-items">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
        <div className="right-items flex gap-8">
            <ul className="non-buttons">
                <li>Join as a Pro</li>
            </ul>
            <ul className="buttons flex justify-between gap-8">
                <li><button className="register-btn border">Register</button></li>
                <li><button className="login-btn border">Sign in</button></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
