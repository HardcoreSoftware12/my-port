import React from 'react'
import rocket from "../img/rocket.gif"

function Education() {
  return (
    <>
    <div className='min-w-[100%]  '>
        <div className='w-[80%] h-[900px]  mx-auto mt-5 text-white text-3xl text-center relative'>
            <h1>Education</h1>
            <div className=' w-[40%] flex justify-end absolute left-0 top-[10%] '> 
                <div className='border  w-[90%] text-end rounded-xl py-5 px-5 bg-[#424769]'>
                    <p>2017</p>
                    <h1>St.Anthony's High School</h1>
                    <h2>85%</h2>
                </div>

            </div>

            <div className='  w-[40%] flex justify-start absolute right-0 top-[40%]'> 
                <div className='border  w-[90%] text-start rounded-xl py-5 px-5 bg-[#424769]'>
                    <p>2017-19</p>
                    <h1>RN Shetty College, Udupi</h1>
                    <h2>85%</h2>
                </div>

            </div>
            {/* <div className='relative h-[85%] border w-0'>
            <div className='   absolute left-[50%]  '>
                
                <div className=' -left-5 '>
                    <span className='fixed top-[20%]'>
                    // 
                    </span>
                </div>

            </div>
            </div> */}
            <div className='absolute left-[50%] top-[10%] h-[82%] border-r w-5'>
                <div className=' sticky top-[10%] -left-1 '>
                    <div className='w-[70px] rotate-180'>
                    <img src={rocket} alt="" className='' />

                    </div>
                    
                       
                    
                    

                    
                    
                </div>
            </div>
            
            



            <div className=' w-[40%] flex justify-end absolute left-0 top-[70%]'> 
                <div className='border  w-[90%] text-end rounded-xl py-5 px-5'>
                    <p>2019-22</p>
                    <h1>Shree Devi College of Information and Science</h1>
                    <h2>85%</h2>
                </div>

            </div>

            {/* <div className='border  w-[40%] flex justify-start absolute right-0 top-[70%]' > 
                <div className='border h-[200px] w-[90%] text-start'>
                    <p>2017</p>
                    <h1>Coding Ninjas</h1>
                    <h2>85%</h2>
                </div>

            </div> */}
        </div>

    </div>
    <div className='h-[900px]'>

    </div>
    </>
  )
}

export default Education