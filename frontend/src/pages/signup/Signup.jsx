import React from 'react'
import { Col, Row } from 'antd';
import './signup.css'
import bgVideo from '../../assets/videos/loginBg.mp4';

const Signup = () => {
  return (
    <>
      <div className='main-container'>
       <video src={bgVideo} muted autoPlay loop className='video'/>
      <div className='content'>Shahid</div>
      </div>
    </>
  )
}

export default Signup
