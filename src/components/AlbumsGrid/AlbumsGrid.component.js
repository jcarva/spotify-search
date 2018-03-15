/* @flow */

// Dependencies
import * as React from 'react'

// Components
import AlbumTile from 'components/AlbumTile/AlbumTile.component'

// Assets
import './AlbumsGrid.scss'
import defaultArtist from 'assets/images/defaultArtist.svg'

// Main Component
const AlbumsGrid = ({albums = [], handleAlbumClick}: {albums: Array<Object>, handleAlbumClick: Function}) => {
  return (
    <div className='albums-grid'>
      {
        albums.length > 0 && albums.map((album) => {
          return (
            <AlbumTile
              key={album.id}
              name={album.name}
              image={(album.images && album.images[0]&& album.images[0].url)
                ? album.images[0].url
                : defaultArtist
              }
              releaseDate={album.release_date.split('-')[0]}
              handleClick={() => handleAlbumClick(album.id)}
            />
          )
        })
      }
    </div>
  )
}

export default AlbumsGrid
