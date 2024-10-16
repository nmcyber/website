import React from 'react'

export default function Navbar() {
  return (
    <nav className=' flex flex-1 justify-center items-center min-h-[8dvh] max-h-[8dvh] relative z-0'>
       {/* Transparent Overlay */}
    <div className="absolute z-10 inset-0 bg-[rgba(0,21,48,0.51)] outline-0 outline-lime-400 "></div>
    {/* <!-- Blurry Overlay --> */}
    <div className="absolute z-20 inset-0 backdrop-blur-[80.5px] "></div>
      <span className=' relative z-30 text-3xl'>Navbar</span>
    </nav>
  )
}
