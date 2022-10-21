import React from 'react'
import '../css/about.css'

const About = () => {
  return (
<>
    <div className='container about'>
        <div className='image-container'>
        </div>
        <div className='content about'>
          <h1>
            About me
          </h1>
          <div className='description about'>
            {/* category */}
              <h2>
                design.
              </h2>
              <p>
              As a designer I specialize in brand designing. <br />
              I develop a brand for a new company &amp; help existing companies redesign or refresh their brand.<br />
              I also have intermediate knowledge in UI/UX.<br />
              <br />
              Softwares: Adobe Illustrator, Photoshop, InDesign, XD &amp; Figma.
              </p>
              {/* end of category */}
              {/* category */}
              <h2>
              Development.
            </h2>
              <p>
            Intermediate web developer.<br />
            Languages: Html, Css, JavaScript &amp; React Js framework.<br />
            <br />
            Currently learning Ruby.<br />
            </p>
            {/* end of category */}
          </div>
        </div>
        </div>
  </>
  )
}

export default About