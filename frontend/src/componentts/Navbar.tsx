"use client"

import React from 'react'
import {usePathname} from 'next/navigation';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left-items">
            <div className="logo">
                <img src={} alt="" />
            </div>
        </div>
        <div className="right-items">
            <ul className="non-buttons">
                
            </ul>
            <ul className="buttons">
                <li><button className="register-btn"></button></li>
                <li><button className="login-btn"></button></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
