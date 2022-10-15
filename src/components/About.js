import React from 'react'
import '../css/about.css'

const About = () => {
  return (
    <div className='container about'>
        <div className='content about'>
          <h1>
            About me
          </h1>
          <div className='description about'>
            {/* category */}
            <p>
            <h2>
              design.
            </h2>
            As a designer I specialize in brand designing. <br />
            I develop a brand for a new company &amp; help existing companies redesign or refresh their brand.<br />
            I also have intermediate knowledge in UI/UX.<br />
            <br />
            Softwares: Adobe Illustrator, Photoshop, InDesign, XD &amp; Figma.
            </p>
            {/* end of category */}
            {/* category */}
          <p>
          <h2>
            development.
          </h2>
           Intermediate web developer.<br />
           Languages: Html, Css, JavaScript &amp; React Js framework.<br />
          <br />
           Currently learning Ruby.<br />
          </p>
          {/* end of category */}
          </div>
        </div>
        </div>
  )
}

export default About