import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({children}) {
  // const navLinks={
    //navs are in app.js not here

  // }
  return (
    <div className='min-h-full'>
       <div className='mx-auto w-[40%] flex justify-around content-between px-4 py-3 text-white bg-opacity-40 bg-[#1F2544] mt-10 rounded-3xl'>
        <Link to="/" className='hover:text-black' >Home</Link>

        <Link to="/">Education</Link>

        <Link to="/">Skills</Link>
        
        <Link to="/">Projects</Link>

        <Link to="/">Contact</Link>
    </div>

    <main>
          {/* <div className="mx-auto  max-w-7xl ">{children}</div> */}
          {children}
    </main>

    </div>
       
  )
}

export default Navbar