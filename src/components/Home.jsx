import React, { useEffect, useState } from 'react'

import Typewriter from 'typewriter-effect';
import me from "../img/last1.png"

function Home() {
    const [typeWriter,setTypeWriter] = useState(false);


    useEffect(()=>{
        const timer = setTimeout(() => {
            setTypeWriter(true);
            
        }, 4000);
        // return ()=> clearInterval(timer)
    })


    
  return (

    <div className='grid sm:grid-rows-2 text-md md:  lg:grid-cols-5 mt-20 h-full '>
        <div className='mx-auto sm:row-span-1 mt-5 h-[200px] md:h-[200px]
         col-span-3'>
        <h1 className='text-5xl text-[#D63484]  py-4'>
        
                
                    <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Heyy It's Ranjit ! 🧑‍💻 🤖")
    
                  .pauseFor(2500)
    
                  .start()

              }}
            />

                
            
            
            
            
        </h1>
        <h2 className='text-white'>
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
           
       
        </h2>

            
        </div>

        {/* //IMAGE */}
        <div className='flex justify-center mx-auto sm:row-span-1 w-[50%]   col-span-2'>
        {/* <div className='sm:w-[100%] flex w-[70%]  items-start'>  */}
            <img src={me} alt="" className='rounded-full' />
            
        {/* </div> */}
        </div>

    </div>
   
       

           
        


       
        
       
       
        

   
  )
}

export default Home