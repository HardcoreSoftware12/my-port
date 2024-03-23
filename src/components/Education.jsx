import React from 'react'
import rocket from "../assets/img/rocket.gif"

function Education() {
  return (
    <>
    <div className='min-w-[100%] h-fit'>
        <div className='w-[80%] h-[100vh]  mx-auto mt-5 text-white text-sm text-center relative md:text-2xl'>
            <h1>Education</h1>
            <div className=' w-[40%] flex justify-end absolute left-0 top-[10%] '> 
                <div className='  w-[90%] text-end rounded-xl py-5 px-5 bg-[#424769] '>
                    <p>2017</p>
                    <h1>St.Anthony's High School</h1>
                    <h2>85%</h2>
                </div>

            </div>

            <div className='  w-[40%] flex justify-start absolute right-0 top-[40%]'> 
                <div className='  w-[90%] text-start rounded-xl py-5 px-5 bg-[#424769]'>
                    <p>2017-19</p>
                    <h1>RN Shetty College, Udupi</h1>
                    <h2>89%</h2>
                </div>

            </div>
           
            <div className='absolute left-[50%] top-[10%] h-[82%]  w-5'>
                <div className=' sticky top-[10%] -left-1 '>
                    <div className='w-[70px] rotate-180'>
                    <img src={rocket} alt="" className='' />

                    </div>
                </div>
            </div>
            <div className=' w-[40%] flex justify-end absolute left-0 top-[70%] '> 
                <div className=' w-[90%] text-end rounded-xl py-5 px-5 bg-[#424769]'>
                    <p>2019-22</p>
                    <h1>Shree Devi College of Information and Science</h1>
                    <h2>8.14 CGPA</h2>
                </div>

            </div>
            
        </div>

    </div>
    
    </>
  )
}

export default Education