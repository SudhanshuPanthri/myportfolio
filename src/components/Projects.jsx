import React from 'react'
import './Projects.css'
import data from '../data';
import Project from './Project';
import Navbar from './Navbar';
import Footer from './Footer';
function Projects() {
    return (
        <>
        <Navbar />
        <div className="projects">
            <div className="projectWrapper">
                {data.map((item)=>(
                    <Project key={item.id} item={item}/>
                ))}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Projects;