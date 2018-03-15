/* @flow */

// Dependencies
import * as React from 'react'

// Components
import Stars from 'components/Stars/Stars.component'

// Assets
import './ArtistTile.scss'

// Interfaces
type Props = {
  name: string,
  image: string,
  genre: string,
  popularity: number,
  handleClick: Function
}

// Main Component
const ArtistTile = ({name, image, genre, popularity, handleClick}: Props) => {
  return (
    <div className='artist-tile' onClick={handleClick}>
      <img className='avatar' src={image} />
      <p className='name'>{name}</p>
      <p className='genre'>{genre}</p>
      <Stars popularity={popularity} />
    </div>
  )
}

export default ArtistTile
