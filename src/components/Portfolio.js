import React,{ useState, useEffect} from 'react'
import '../css/portfolio.css'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8001/portfolio')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
  }, [])

  console.log(projects)

  return (
    <div className='container portfolio'>
        <div className='content portfolio'>
            <h1> Show Case</h1>
            <div className="description portfolio">
                <p>case studies of my projects</p>
                </div>
              </div>

                <div className='portfoliocards-container'>
                  {loading ? <div>Loading...</div> :projects.map (project => <PortfolioCard key={project.id}project={project}/> ) }
                </div>   
    </div>
  )
}

export default Portfolio