"use client"

import React from 'react'

const page = () => {

  return (
    <span className=' h-screen w-screen bg-white opacity-80 z-20 fixed top-0 flex justify-center align-middle '>
         <div className="cyberpunk-loader w-screen">
            <div className="loader-text font-extrabold">INTILIZING</div>
            <div className="loader-bar">
                <div className="bar"></div>
            </div>
        </div>
    </span>
  )
}

export default page
