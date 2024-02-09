import React, { useState } from 'react'
// import { a } from 'react-router-dom'
import Home from './Home';
import Education from './Education';

function Navbar() {
  
  const [hamBurger, setHamburger] = useState(false);

  return (
    <div className='min-h-full w-[100%] '>
      {/* NAVBAR STARTS */}
      {/* DESKTOP */}
       <div className=  "mx-auto  w-[70%] flex justify-around content-between  py-5 text-white bg-opacity-40 bg-[#1F2544] mt-10 rounded-3xl invisible lg:visible text-2xl">
        <a href="/" className='hover:text-black' >&lt; Home <span>/</span> &gt; </a>
        <a href="#edu" className='hover:text-black ' >&lt; Education <span>/</span> &gt; </a>
        <a href="/" className='hover:text-black ' >&lt; Skills <span>/</span> &gt; </a>
        <a href="/" className='hover:text-black ' >&lt; Projects <span>/</span> &gt; </a>
        <a href="/" className='hover:text-black ' >&lt; Contact <span>/</span> &gt; </a>

        
    </div>

    {/* MOBILE */}
    <div className='absolute  w-[100%] visible top-10  lg:invisible text-2xl '>
    <div className='relative'>
    <span className='text-4xl cursor-pointer absolute top-10 right-5
    '  onClick={()=>{
      setHamburger(!hamBurger)

    }}>🍔</span>
    </div>
    {
      hamBurger && (
        <nav className='flex flex-col justify-between items-center h-[300px] mt-[19%] z-10 bg-gray'>
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