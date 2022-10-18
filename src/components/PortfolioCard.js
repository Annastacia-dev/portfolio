import React from 'react'
import '../css/portfoliocard.css'
import { Link } from 'react-router-dom'

const PortfolioCard = ({ project }) => {

    const { id, title, categories, image, link, github } = project

  return (
    <Link end to={`${id}`} className='portfolio-card'>
      <div className="image-bg">
        <img src={image} alt={title} />
      </div>
        <div className="card-details">
        <h3>{title}</h3>
        {categories.map(category => <span key={category}> | {category}</span>)}
        </div>
    </Link>
  )
}

export default PortfolioCard