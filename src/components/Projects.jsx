import React from 'react'
import ProjectCard from './ProjectCard'
import {data} from "../assets/ProjectsData"

function Projects() {
  return (
    <div className='w-[100%]  text-white'>

      <div className='w-[80%] mx-auto text-center'>
        <h1 className='text-2xl'>Project Works</h1>
      </div>


      <div className='w-[80%]  mx-auto'>
        <ProjectCard count={3}/>
        
          


     
        
        

      </div>
      
      

        

    </div>
  )
}

export default Projects