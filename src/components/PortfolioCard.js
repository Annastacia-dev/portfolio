import React from 'react'
import '../css/portfoliocard.css'


const PortfolioCard = ({ project }) => {

    const { id, title, categories, image, link } = project

  return (
    <>
    <div end to={`${id}`} className='portfolio-card'>
      <div className="image-bg">
        <img src={image} alt={title} />
      </div>
        <div className="card-details">
        <h3>{title}</h3>
        {categories.map(category => <span key={category}> | {category}</span>)}
        <div>
        <a 
            className='float-on-hover' 
             href={link}
             target="blank">
              <i class="fa-solid fa-angle-right"></i>
              </a>
        </div>
        </div>    
    </div>
    </>
  )
}

export default PortfolioCard