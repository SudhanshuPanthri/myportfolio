import React from 'react'
import './Home.css'
import BART from '../assets/BART.png'
import SkillBar from 'react-skillbars'
import skillLogo from '../assets/skillLogo.svg'
import edLogo from '../assets/edLogo.svg'
function Home() {
    const skills=[{
        type:"HTML",level:65
    },{
        type:"CSS",level:70
    },{
        type:"Javascript",level:60
    },{
        type:"React JS",level:55
    }]
    return (
        <div className='parent'>
        <div className='home'>
            <div className="left">
                <img className='image' src={BART} alt="logo" />
                <div className="headings">
                <h1>Hi, i'm Sudhanshu Panthri</h1>
                <h3>I'm a Front-end Developer</h3>
                </div>
            </div>
            <div className="right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sint odio numquam sunt officiis quod, laboriosam hic nihil molestias debitis velit omnis tempore suscipit. Doloribus corrupti placeat molestias? Voluptate voluptatem architecto ad tenetur natus ducimus quasi eaque, quo rerum rem corporis aspernatur aliquam necessitatibus neque, repudiandae numquam fugit temporibus debitis provident quidem porro sunt itaque. Laudantium quos natus reiciendis iure consectetur delectus eveniet, repellat architecto dolorem vel labore blanditiis aliquid? Libero autem dolor unde excepturi beatae, molestiae nisi nihil harum nam, fuga dolore eius earum aut. Totam fugiat deleniti cumque quia dolores! Autem nam ex dolor dicta laboriosam expedita optio.
            </div>
        </div>
        <div className="skillWrapper">
            <div className="leftSkill">
                <h2>Skills</h2>
                <SkillBar skills={skills} height={'8vh'} colors={{
                    bar:'#1d2f43',
                    title: {
                        background:{
                            hue: 220,
                            saturation:30,
                            level:50
                        }
                    }
                }}/>
            </div>
            <div className="rightSkill">
                <div className="logo">
                  <img src={skillLogo} alt="" />
                </div>
            </div>
        </div>
        <div className="educationWrapper">
            <div className="leftEducation">
                <img className='logo' src={edLogo} alt="logo" />
            </div>
            <div className="rightEducation">
            <h2>Education</h2>
               <ul className='edList'>
                   <li className='edListItem'>Currently pursuing BCA from Jagannath International Management School,Vasant Kunj, Delhi</li>
                   <li className='edListItem'>Secondary Schooling from AGDAV Centenary Public School,Model Town</li>
                   <li className='edListItem'>12th Board from CBSE, Delhi</li>
                   <li className='edListItem'>10th Board from CBSE, Delhi</li>
               </ul>
            </div>
        </div>
        </div>
    )
}

export default Home
