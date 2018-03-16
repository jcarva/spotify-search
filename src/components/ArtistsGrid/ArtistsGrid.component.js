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

// Components
const EmptySearch = () => {
  return (
    <div className='empty-search'>
      <h1>No results found for your search</h1>
      <p>Please make sure your words are spelled correctly or use different keywords.</p>
    </div>
  )
}

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

// Main Component
const ArtistGridContent = (props: Props) => props.artists.length ? <ArtistsGrid {...{...props}} /> : <EmptySearch />

export default ArtistGridContent
