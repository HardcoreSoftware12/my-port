import React, { useState } from 'react'
// import { a } from 'react-router-dom'
import Home from './Home';
import Education from './Education';
import Projects from './Projects';

function Navbar() {
  
  const [hamBurger, setHamburger] = useState(false);

  return (
    <div className='min-h-full w-[100%] '>
    {/* NAVBAR STARTS */}
     

    {/* MOBILE */}
    <div className='absolute top-5 mb-5  w-[100%] visible  lg:invisible text-2xl  text-white'>
    <div className='relative'>
    <span className='text-4xl cursor-pointer absolute  right-5 top-5
    '  onClick={()=>{
      setHamburger(!hamBurger)

    }}>🍔</span>
    </div>
    {
      hamBurger && (
        <nav className='flex flex-col justify-between items-center h-[300px]  z-10 bg-gray mt-20 bg-black'>
        <a href="/" className='hover:text-black' >Home</a>
  
        <a href="#edu"> Education </a>
        
        
  
        <a href="/">Skills</a>
  
        <a href="#pro">Projects</a>
  
        <a href="/">Contact</a>
  
      </nav>

      )
    }
   
    </div>
     {/* DESKTOP */}
     {
        !hamBurger && (
          <div className= "mt-7 mx-auto  w-[70%] flex justify-around content-between  py-5 text-white bg-opacity-40 bg-[#1F2544]  rounded-3xl invisible lg:visible text-2xl">
          <a href="/" className='hover:text-black' >&lt; Home <span>/</span> &gt; </a>
          <a href="#edu" className='hover:text-black ' >&lt; Education <span>/</span> &gt; </a>
          <a href="/" className='hover:text-black ' >&lt; Skills <span>/</span> &gt; </a>
          <a href="#pro" className='hover:text-black ' >&lt; Projects <span>/</span> &gt; </a>
          <a href="/" className='hover:text-black ' >&lt; Contact <span>/</span> &gt; </a>
          </div>

        )
      }

    {/* NAVBAR ENDS */}


    {/* HOME PAGE */}
    <main className='border'>
      <Home hamBurger={hamBurger}/>
    </main>
    {/* HOME PAGE ENDS */}


    {/* EDUCATION SECTION */}
    <section id='edu' className=' h-[100%]'>
      <Education/>
    </section>
    {/* EDUCATION SECTION ENDS */}


     {/* Projects SECTION */}
     <section id='pro' className=' mt-5'>
      <Projects/>
    </section>
    {/* Projects SECTION ENDS */}
    

    </div>
       
  )
}

export default Navbar