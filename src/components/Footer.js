import React from 'react'
import '../css/footer.css'
import ai from '../images/ai.png'
import ps from '../images/ps.png'
import ae from '../images/ae.svg'
import aid from '../images/aid.svg'
import pr from '../images/pr.svg'
import an from '../images/an.svg'
import fi from '../images/fi.svg'

const Footer = () => {
  return (
    <div className='container footer'>
        <div className="content footer">
        <h1>Footer</h1>
        <div className="description footer">
        <h3>Softwares &amp; Stacks</h3>
            <div className="category">
            <img src={ai} alt="" style={{"width":"100px"}} />
            <img src={ps} alt="" style={{"width":"50px", "marginBottom":"8px"}} />
            <img src={ae} alt="" style={{"width":"100px"}} />
            <img src={aid} alt="" style={{"width":"100px"}} />
            <img src={pr} alt="" style={{"width":"100px"}} />
            <img src={an} alt="" style={{"width":"100px"}} />
            <img src={fi} alt="" style={{"width":"30px"}} />
            </div>
            
           
        </div>
        
        </div>
    </div>
  )
}

export default Footer