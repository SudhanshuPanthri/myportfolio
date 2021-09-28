import React from 'react'
import './Project.css'
import {InstagramOutlined,ReloadOutlined,GithubOutlined,TwitterOutlined} from '@ant-design/icons'

const Project=(props)=>(
        <div className='projectCard'>
            <div className="imgSection">
                <img className='projectImg' src={props.item.imageSrc} alt="" />
            </div>
            <div className="infoSection">
                <h2>{props.item.name}</h2>
                <h4>{props.item.info}</h4>
                <h4>Live Site Preview : <br/><a href={props.item.livePreview} target='_blank'>{props.item.livePreview}</a></h4>
                <a href={props.item.github} target='_blank'>
                    <GithubOutlined className='icon-repo' />
                </a>
            </div>
        </div>
)

export default Project;