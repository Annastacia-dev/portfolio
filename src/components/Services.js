import React from 'react'
import cards from '../data/cards.js'
import '../css/services.css'
import Card from './Card'

const Services = () => {
    const services = cards.services
   
    
  return (
    <div className='container services'>
        <div className="content services">
            <h1>What I do</h1>
            <div className="description services">
                <p>My creative expertise</p>
                <div className='cards-container'>
                {services.map(service => <Card key={service.id} service={service} />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services