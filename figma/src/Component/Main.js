import React from 'react'
import rectangleImage from '../images/Rectangle 157.png'
import travImage from '../images/tour-guide 1.png'
import travImage1 from '../images/travelling 1.png'
import travImage2 from '../images/hands 1.png'
import travImage3 from '../images/medical-team 1.png'
import rectImage from '../images/Rectangle 2222.png'
import fineImage from '../images/Ellipse 3.png'
import fineImage1 from '../images/Ellipse 1.png'
import fineImage2 from '../images/Ellipse 2.png'
import fineImage3 from '../images/image 50 (1).png'
const Main = () => {
  return (
    <div>
        <h4 className='center'>CATEGORY</h4>
        <h4 className='cen'>we offer Best Services</h4>
    <div className='flex'>
        <div className='flex1'> 
        <img src={travImage} style={{zIndex:"1"}}></img>
        <img src={rectangleImage}></img>
        <h4>Guided Tours</h4>
        <p>sunt qui repellat saepe
         quo velit aperiam id 
         aliquam placeat.</p>

        </div>
        <div className='flex2'>
        <img src={travImage1}></img>
        <img src={rectangleImage}></img>
        <h4>Best Flight Option</h4>
        <p>sunt qui repellat saepe
         quo velit aperiam id 
         aliquam placeat</p>

        </div>

        <div className='flex3'>
        <img src={travImage2}></img>
        <img src={rectangleImage}></img>
        <h4>Religious Tours</h4>
        <p>sunt qui repellat saepe
         quo velit aperiam id 
         aliquam placeat</p>

        </div>

        <div className='flex4'>
        <img src={travImage3}></img>
        <img src={rectangleImage}></img>
        <h4>Medical insurance</h4>
        <p>sunt qui repellat saepe
         quo velit aperiam id 
         aliquam placeat</p>

        </div>
        
    </div>
    <div className='shift'>
    <img src={rectImage}></img>
    </div>
    
    <div className='ddd'>
        <div>
            <img src={fineImage2}></img>
        </div>
        <div className='mu'>
            <img src={fineImage1}></img>
        </div>
        <div>
            <img src={fineImage3}></img>
        </div>
        <div>
            <img src={fineImage}></img>
        </div>

    </div>
    </div>
  )
}

export default Main