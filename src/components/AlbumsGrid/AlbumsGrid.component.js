/* @flow */

// Dependencies
import * as React from 'react'

// Components
import AlbumTile from 'components/AlbumTile/AlbumTile.component'

// Assets
import './AlbumsGrid.css'

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
              image={album.image}
              releaseDate={album.releaseDate}
              handleClick={() => handleAlbumClick(album.id)}
            />
          )
        })
      }
    </div>
  )
}

export default AlbumsGrid
