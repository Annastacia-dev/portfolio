import React from 'react'
import { Link } from 'react-router-dom'
import '../css/card.css'

const Card = ({service}) => {
    const {image, title, icon} = service
  return (
    <div className='card'>
    <Link to={`/services/${service.id}`}>
            <img src={image} alt={title} />
            <div className='details'>
                <span><i className={icon}></i></span>
                <h4>{title}</h4>
            </div>
            
    </Link>
    
    </div>
  )
}

export default Card