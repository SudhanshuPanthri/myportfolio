import React from 'react'
import {Link} from 'react-router-dom'
import {InstagramOutlined,ReloadOutlined,GithubOutlined,LinkedinOutlined} from '@ant-design/icons'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <Link to='/'>
                    <h3 className='name'>Sudhanshu Panthri</h3>
                </Link>
            </div>
            <div className="linkWrapper">
            <ul className="links">
                <li className='listItem'>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='listItem'>
                <Link to='/projects' className='link'>Projects</Link>
                </li>
            </ul>
            </div>
            <div className="socialIcons">
                <a href="https://www.instagram.com/sudhanshuuwu" target='_blank'>
                <InstagramOutlined className='icon' />
                </a>
                <a href="https://github.com/SudhanshuPanthri" target='_blank'>
                <GithubOutlined className='icon'/>
                </a>
                <a href="https://www.linkedin.com/in/sudhanshu-p-43797ab1" target='_blank'>
                <LinkedinOutlined className='icon'/>
                </a>
            </div>
        </div>
    )
}

export default Navbar
