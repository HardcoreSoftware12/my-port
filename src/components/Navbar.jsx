import React, { useState } from 'react'
// import { a } from 'react-router-dom'
import Home from './Home';
import Education from './Education';

function Navbar() {
  
  const [hamBurger, setHamburger] = useState(false);

  return (
    <div className='min-h-full'>
      {/* NAVBAR STARTS */}
      {/* DESKTOP */}
       <div className=  "mx-auto  w-[50%] flex justify-around content-between px-1 py-5 text-white bg-opacity-40 bg-[#1F2544] mt-10 rounded-3xl invisible lg:visible text-2xl">
        <a href="/" className='hover:text-black' >Home</a>

        <a href="#edu"> Education </a>
        

        <a href="/">Skills</a>
        
        <a href="/">Projects</a>

        <a href="/">Contact</a>
    </div>

    {/* MOBILE */}
    <div className='relative bg-white visible lg:invisible text-2xl'>
    <div className='absolute right-2 -top-12'>
    <span className='text-4xl cursor-pointer' onClick={()=>{
      setHamburger(!hamBurger)

    }}>🍔</span>
    </div>
    {
      hamBurger && (
        <nav className='flex flex-col justify-between items-center h-[300px] w-[100%] border absolute right-0 top-0 z-10 bg-white'>
        <a href="/" className='hover:text-black' >Home</a>
  
        <a href="#edu"> Education </a>
        
        
  
        <a href="/">Skills</a>
  
        <a href="/">Projects</a>
  
        <a href="/">Contact</a>
  
      </nav>

      )
    }
   
    </div>

    {/* NAVBAR ENDS */}


    {/* HOME PAGE */}
    <main className='sm:mb-[350px] mb-[300px] lg:mb-[40px] xl:mb-[120px]'>
      <Home hamBurger={hamBurger}/>
    </main>
    {/* HOME PAGE ENDS */}


    {/* EDUCATION SECTION */}
    <section id='edu'>
      <Education/>
    </section>
    {/* EDUCATION SECTION ENDS */}
    

    </div>
       
  )
}

export default Navbar