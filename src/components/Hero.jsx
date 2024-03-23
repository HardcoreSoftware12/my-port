import React, { useEffect, useState } from 'react'

import Typewriter from 'typewriter-effect';
import me from "../assets/img/last1.png"

function Hero() {
    const [typeWriter,setTypeWriter] = useState(false);


    useEffect(()=>{
        const timer = setTimeout(() => {
            setTypeWriter(true);
            
        }, 4000);
        // return ()=> clearInterval(timer)
    })


    
  return (

    <div className='max-h-[350px] mt-8 grid grid-rows-2 text-center gap-5 
    lg:grid-cols-5'>
        <div className='mx-auto w-[80%] h-[200px] row-span-1 flex flex-col justify-center items-center
        lg:col-span-3 mt-10 pt-10
        xl:mt-20
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
                  .typeString("I am Full-Stack 🌐 Web Developer and Passionate Programmer ⌨️")
    
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
        md:w-[400px]
        lg:col-span-2 mt-10
        xl:pt-0
        '>
            <img src={me} alt="" className='rounded-full lg:w-[60%] xl:w-[90%]' />
            
       
        </div>

    </div>
   
       

           
        


       
        
       
       
        

   
  )
}

export default Hero