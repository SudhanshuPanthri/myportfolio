import React from 'react'
import './Projects.css'
import data from '../data';
import Project from './Project';

function Projects() {
    return (
        <div className="projects">
            <div className="projectWrapper">
                {data.map((item)=>(
                    <Project key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;