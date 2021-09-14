import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages.js'


const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {

  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-12">
          <img src={heroImages(`./${id}.jpg`).default} className="card-img-top" alt={superhero} />
        </div>
        <div className="col-md-12 card text-center">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text mx-auto">{alter_ego}.</p>
            {
              (alter_ego !== characters)
              && <p className="card-text">{characters}</p>
            }
            <p className="card-text">
              <small className="text-muted">{first_appearance} </small>
            </p>
            <Link to={`./hero/${id}`}>
              Más...
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
