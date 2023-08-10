import React from 'react'
import heroImage from '../images/Rectangle 19290.png'
import arrowImage from '../images/Arrow 05 (1).png'
import vectorImage from '../images/Vector 1.png'
import "../App.css"
import elipseImage31 from '../images/Ellipse 31.png'
import elipseImage32 from '../images/Ellipse 32.png'
import elipseImage33 from '../images/Ellipse 33.png'
import elipseImage34 from '../images/Ellipse 34.png'
import elipseImage35 from '../images/Ellipse 35.png'
import elipseImage36 from '../images/Ellipse 36.png'
import elipseImage37 from '../images/Ellipse 37.png'
import elipseImage620 from '../images/Ellipse 620.png'
import elipseImage from '../images/Ellipse 620@2x.png'

const Hero = () => {
    
  return (
    <div className='heroSection' >
      <nav>
         
         <div className='opay'>
         <h3 id='first'>Travel </h3>
         <img src={arrowImage}></img>
         </div>
        
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services <i class="fa-solid fa-caret-down fa-sm"></i> </a></li>
        <li><a>Upcoming Packages</a></li>
        <button>Get in Touch</button>
      </nav>

   <img className='top' src={vectorImage}></img>
   <h3 className='slogan'>No matter where you're <br></br>
   going to,we'll take you <br></br> <h3 className='shi'>there</h3> </h3>
   
   <div className='opps'>
   <p>where to? |   </p>
  
   <p>Travel Type    <i class="fa-solid fa-chevron-down fa-sm">  </i>|</p>
   
   <p>Duration    <i class="fa-solid fa-chevron-down fa-sm">  </i> </p>
  
    <button>Submit</button>
   </div>
   <div className='elipse'>
    <img src={elipseImage31}></img>
    <img src={elipseImage32}></img>
    <img src={elipseImage33}></img>
    <img src={elipseImage34}></img>
    <img src={elipseImage35}></img>
    <img src={elipseImage36}></img>
    <img src={elipseImage37}></img>
    <p>2,500 people booked tomorrowland Event in the last 24 hours</p>
   </div>
<div className='elipse1'>
<img src={elipseImage620}></img>
<img src={elipseImage} className='edd'></img>
<p>scroll</p>
</div>

    </div>
  )
}

export default Hero