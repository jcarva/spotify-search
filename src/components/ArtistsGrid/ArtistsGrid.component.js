/* @flow */

// Dependencies
import * as React from 'react'

// Components
import ArtistTile from 'components/ArtistTile/ArtistTile.component'

// Assets
import './ArtistsGrid.css'

// Inferfaces
type Props = {
  artists: Array<Object>,
  handleArtistClick: Function
}

// Main Component
const ArtistsGrid = ({artists = [], handleArtistClick}: Props) => {
  return (
    <div className='artists-grid'>
      {
        artists.length > 0 && artists.map((artist) => {
          return (
            <ArtistTile
              key={artist.id}
              name={artist.name}
              image={artist.image}
              genre={artist.genre}
              popularity={artist.popularity}
              handleClick={() => handleArtistClick(artist.id)}
            />
          )
        })
      }
    </div>
  )
}

export default ArtistsGrid
