import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages.js';
import { getHeroById } from '../../selectors/getHeroById'
// import batman from '../../assets/heroes/dc-batman.jpg' //estático



const HeroScreen = ({ history }) => {

  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId])

  if (!hero) {
    return (<Redirect to="/" />)
  }

  const {
    // id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-6">
        <img
          // src={`../assets/heroes/${heroeId}.jpg`} //desde public/assets
          // src={batman} //import
          src={heroImages(`./${heroeId}.jpg`).default}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-6 animate__animated animate__fadeInRight">
        <h2>{superhero}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
        </ul>
        <h5 className="mt-4">Characters</h5>
        <p>{characters}</p>
        <button
          className="btn btn-outline-info"
          onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}

export default HeroScreen
