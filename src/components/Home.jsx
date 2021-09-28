import React from 'react'
import './Home.css'
import {LinkedinOutlined,GithubOutlined,InstagramOutlined} from '@ant-design/icons'
import BART from '../assets/BART.png'
import SkillBar from 'react-skillbars'
import skillLogo from '../assets/skillLogo.svg'
import edLogo from '../assets/edLogo.svg'
import Certificate from '../assets/udemyCertificate.jpg'
import guviCertificate from '../assets/guviCertificate.jpg'
import IBM from '../assets/IBM.jpg'
import HP from '../assets/HPLife.jpg'
function Home() {
    const skills=[{
        type:"HTML",level:65
    },{
        type:"CSS",level:70
    },{
        type:"Javascript",level:65
    },{
        type:"React JS",level:60
    },
    {
        type:"Node JS",level:50
    },
    {
        type:"C++",level:65
    }]
    return (
        <div className='parent'>
        <div className='home'>
            <div className="left">
                <img className='image' src={BART} alt="logo" />
                <div className="headings">
                <h1>Hi, i'm Sudhanshu Panthri</h1>
                <span>A ,</span>
                <h3>Front-end Developer</h3>
                <h3>Dark Chocolate Addict.</h3>
                <h3>Tech-Enthusiast</h3>
                <h3>Part Time Gamer</h3>
                <p>I'm a delhi based IT Student who loves making websites and loves to work on interesting projects.</p>
                <div className='iconWrapper'>
                <a href='https://www.linkedin.com' target='_blank'>
                    <LinkedinOutlined className='icon-main'/>
                </a>
                <a href='https://www.linkedin.com' target='_blank'>
                    <GithubOutlined className='icon-main'/>
                </a>
                <a href='https://www.linkedin.com' target='_blank'>
                    <InstagramOutlined className='icon-main'/>
                </a>
                </div>
                <div className='border'></div>
                </div>
            </div>
        </div>
        <div className="skillWrapper">
            <div className="leftSkill">
                <h2>Skills</h2>
                <SkillBar skills={skills} height={'5vh'} colors={{
                    bar:'#6A5ACD',
                    title: {
                        background:{
                            hue: 120,
                            saturation:50,
                            level:60
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
                   <li className='edListItem'>Passed 12th CBSE Board in 2018</li>
                   <li className='edListItem'>Passed 10th CBSE Board in 2016</li>
               </ul>
            </div>
        </div>
        <div className="certificationWrapper">
            <div className="heading">
                <h2>Certificates and Achivements</h2>
            </div>
            <div className="certificates">
                <div className="certificateWrapper">
                <img className='certificate' src={Certificate} alt="udemy-certificate" />
                </div>
                <div className="certificateWrapper">
                <img className='certificate' src={guviCertificate} alt="guvi-certificate" />
                </div>
                <div className="certificateWrapper">
                <img className='certificate' src={IBM} alt="guvi-certificate" />
                </div>
                <div className="certificateWrapper">
                <img className='certificate' src={HP} alt="guvi-certificate" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home
