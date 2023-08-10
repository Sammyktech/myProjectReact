import React from 'react'
import logoImage from '../images/image 909.png'
import logoImage1 from '../images/image 912.png'
import "../App.css"
const Logo = () => {
  return (
    <div className='logo'>
        <img src={logoImage}></img>
        <img src={logoImage1}></img>
    </div>
  )
}

export default Logo