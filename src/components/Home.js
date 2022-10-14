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
        <div className='content'>
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
     </div>
    </div>
      
    </>
  )
}

export default Home

