import React from 'react'
import './Projects.css'
import data from '../data';

function Projects() {
    return (
        <div className="projects">
            <div className="projectWrapper">
                {data.map((item)=>{
                    return (
                        <div className='projectCard'>
                            <img className='projectImg' src={item.imageSrc} alt="projectImg" />
                            <h1>{item.name}</h1>
                            <h2>{item.id}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;