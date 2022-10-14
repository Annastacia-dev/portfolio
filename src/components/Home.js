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
    <div className='container'>
    <h1>
        Hello, I'm Annastacia 👋
        <br/> I offer creative
        <br />
        <span id='typewriter'>
            <Typewriter
                typewriter={typewriter}
                options={{
                    strings: ['digital', 'web', ' & design'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </span>
        solutions.
    </h1>
    </div>
      
    </>
  )
}

export default Home

