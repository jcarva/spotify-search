/* @flow */

// Dependencies
import * as React from 'react'

// Assets
import './AlbumTile.css'

// Interfaces
type Props = {
  name: string,
  image: string,
  releaseDate: string,
  handleClick: Function
}

// Main Component
const AlbumTile = ({name, image, releaseDate, handleClick}: Props) => {
  return (
    <div className='album-tile' onClick={handleClick}>
      <img className='avatar' src={image} alt='album-cover' />
      <p>{name}</p>
      <p>{releaseDate}</p>
    </div>
  )
}

export default AlbumTile
