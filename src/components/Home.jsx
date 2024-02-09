import React, { useEffect, useState } from 'react'

import Typewriter from 'typewriter-effect';
import me from "../img/last1.png"

function Home({hamBurger}) {
    const [typeWriter,setTypeWriter] = useState(false);


    useEffect(()=>{
        const timer = setTimeout(() => {
            setTypeWriter(true);
            
        }, 4000);
        // return ()=> clearInterval(timer)
    })


    
  return (

    <div className={` ${hamBurger ? "mt-[190px]" : ""} max-h-[350px] grid grid-rows-2 text-center gap-5 
    lg:grid-cols-5`}>
        <div className='mx-auto w-[80%] h-[200px] row-span-1 flex flex-col justify-start items-center 
        
        
        lg:col-span-3 mt-[100px] 
        xl:mt-[150px]
        '>
        <h1 className='text-[#D63484] text-2xl
        sm:text-4xl
        xl:text-5xl
        2xl:text-6xl'>
        
                
                    <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Heyy It's Ranjit ! 🧑‍💻 🤖")
    
                  .pauseFor(2500)
    
                  .start()

              }}
            />
        </h1>
        <h1 className='text-white text-sm
        sm:text-2xl pt-5  '>
        {
                typeWriter && (
                    <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am Full-Stack 🌐 Web Developer && Passionate Programmer ⌨️")
    
                  .pauseFor(2500)
    
                  .start()

              }}
            />

                )
            }
           
       
        </h1>

            
        </div>

        {/* //IMAGE */}
        <div className='row-span-1  pt-1 w-[50%] mx-auto
        sm:pt-5
        md:w-[400px] mt-0
        lg:col-span-2 mt-[60px] 
        xl:mt-12
        2xl:
        '>
            <img src={me} alt="" className='rounded-full  lg:w-[60%] xl:w-[90%]' />
            
       
        </div>

    </div>
   
       

           
        


       
        
       
       
        

   
  )
}

export default Home