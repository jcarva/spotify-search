/* @flow */

// Dependencies
import * as React from 'react'

// Services
import utils from 'services/utils'

// Components
import Stars from 'components/Stars/Stars.component'

// Assets
import './Album.css'

// Interfaces
type Props = {
  name: string,
  image: string,
  artist: string,
  popularity: number,
  releaseDate: string,
  albumDetails: Object
}

// Main Component
const Album = ({name, image, artist, popularity, releaseDate, albumDetails}: Props) => {
  return (
    <div className='album'>
      <img className='avatar' src={image} alt='album-cover' />
      <div className='details'>
        <div className='header'>
          <h2 className='name'>{name}</h2>
          <Stars popularity={popularity} />
        </div>
        <div className='artist'>
          <p>By</p>
          <p className='name'>{artist}</p>
        </div>
        <p>
          {releaseDate} &#9900; {albumDetails.totalOfSongs} Songs, {utils.millisToMinutesAndSeconds(albumDetails.albumDuration)} min.
        </p>
      </div>
    </div>
  )
}

export default Album
