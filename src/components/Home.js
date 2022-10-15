import React from 'react'
import Typewriter from 'typewriter-effect'
import '../css/home.css'

const Home = () => {
    var typewriter = new Typewriter('#typewriter', {
        loop: true,
        delay: 75,
      });
  return (
    <>
    <div className='container home'>
        <div className='content home'>
            <h1>
                Hello, I'm Annastacia 👋
                <br/> I offer creative
                <span id='typewriter'>
                    <Typewriter
                        typewriter={typewriter}
                        options={{
                            strings: ['digital', 'web', ' & design'],
                            autoStart: true,
                            delay:75,
                            deleteSpeed: 30,
                            pauseFor: 1000,
                            loop: true,
                        }}
                    />
                </span>
                solutions.
            </h1>

            <div className='description'>
                <p>
                    Telling your story through design is my passion. 
                    <br />
                    I'm a creative problem solver with a background in design and development. 
                    
                </p>
            </div>
     </div>
    </div>
      
    </>
  )
}

export default Home

