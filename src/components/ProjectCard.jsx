import React from 'react'
import { data } from '../assets/ProjectsData';

function ProjectCard({count}) {
    console.log(count);
    const display= data.slice(0,count);
  return (
    <div className='flex justify-center mt-[5%]  flex-wrapm[10px]'>
       {
        display.map((project,i)=>{
            return(
                <div key={i} className='p-5'>
                    <img src={project.img} alt="pro-images" className='w-[300px] rounded-xl' />
                    <p>{project.name}</p>
                    <p>{project.tech}</p>
                    
                </div>
            )


        })

       }

    </div>
  )
}

export default ProjectCard