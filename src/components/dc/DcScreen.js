import React from 'react'
import HeroList from '../heroes/HeroList'

const DcScreen = () => {
  return (
    <>
      <h1>DC Superheros</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </>
  )
}

export default DcScreen
