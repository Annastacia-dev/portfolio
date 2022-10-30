import React from 'react'
import '../css/footer.css'
import ai from '../images/ai.png'
import ps from '../images/ps.png'
import ae from '../images/ae.svg'
import aid from '../images/aid.svg'
import pr from '../images/pr.svg'
import an from '../images/an.svg'
import fi from '../images/fi.svg'
import html from '../images/html.svg'
import css from '../images/css.png'
import ruby from '../images/ruby.png'
import js from '../images/js.png'
import react from '../images/react.svg'
import rr from '../images/rr.svg'


const Footer = () => {
  return (
    <div className='container footer'>
        <div className="content footer">
        <h1>Softwares &amp; Stacks</h1>
        <div className="description footer">
        <div className="skills">
            <div className="category softwares">
            <img src={ai} alt="" style={{"width":"100px"}} />
            <img src={ps} alt="" style={{"width":"50px", "marginBottom":"8px","marginLeft":"10px","marginRight":"10px"}} />
            <img src={ae} alt="" style={{"width":"100px"}} />
            <img src={aid} alt="" style={{"width":"100px"}} />
            <img src={pr} alt="" style={{"width":"100px"}} />
            <img src={an} alt="" style={{"width":"100px"}} />
            <img src={fi} alt="" style={{"width":"30px", "marginBottom":"10px","marginLeft":"10px",
            "marginRight":"10px"}} />
            </div>
            <div className="category stacks">
            <img src={html} alt="" style={{"width":"40px","marginBottom":"10px","marginLeft":"25px","marginRight":"25px"}} />
            <img src={css} alt="" style={{"width":"45px","marginLeft":"25px","marginRight":"25px","marginBottom":"10px"}} />
            <img src={js} alt="" style={{"width":"45px","marginLeft":"15px","marginRight":"25px","marginBottom":"10px"}} />
            <img src={ruby} alt="" style={{"width":"40px","marginLeft":"35px","marginRight":"25px","marginBottom":"10px"}} />
            <img src={react} alt="" style={{"width":"100px",}} />
            <img src={rr} alt="" style={{"width":"100px","marginLeft":"15px"}} />
            </div>  
            </div>
        </div>
         <div className="socials">
         <h1>Lets Connect</h1>
         <div className="description socials">
          <div>
          {/* --- */}
          <i className="fa-solid fa-paper-plane"></i>
          <span className>annetotoh@gmail.com</span>
          </div>
          {/* --- */}
          <i className="fa-solid fa-mobile"></i>
          <span>0768372439</span>
         </div>
         <div className='media'>
            <a href="facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
         </div>
         <div className='copyright'>
          <p>
            <i class="fa-regular fa-copyright"></i>
            <span>
              {new Date().getFullYear()} All Rights Reserved.Annastacia Mumbua Kioko.
            </span>
          </p>
         </div>
         </div>
        </div>
    </div>
  )
}

export default Footer