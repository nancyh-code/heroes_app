import React from 'react'
import HeroList from '../heroes/HeroList'

const MarvelScreen = () => {
  return (
    <>
      <h1>Marvel Superheros</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'} />
    </>
  )
}

export default MarvelScreen
