/* @flow */

// Dependencies
import * as React from 'react'

// Components
import ArtistTile from 'components/ArtistTile/ArtistTile.component'

// Assets
import './ArtistsGrid.scss'
import defaultArtist from 'assets/images/defaultArtist.svg'

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
              handleClick={() => handleArtistClick(artist.id)}
              name={artist.name}
              image={(artist.images && artist.images[0] && artist.images[0].url) ? artist.images[0].url : defaultArtist}
              genre={(artist.genres && artist.genres[0]) ? artist.genres[artist.genres.length - 1] : ''}
              popularity={artist.popularity}
            />
          )
        })
      }
    </div>
  )
}

export default ArtistsGrid
