/* @flow */

// Dependencies
import * as React from 'react'
import _ from 'lodash'

// Services
import spotifyApi from 'services/spotify'
import utils from 'services/utils'

// Components
import Artist from 'components/Artist/Artist.component'
import AlbumsGrid from 'components/AlbumsGrid/AlbumsGrid.component'

// Assets
import './Artist.css'
import defaultArtist from 'assets/images/defaultArtist.svg'
import defaultAlbum from 'assets/images/defaultAlbum.svg'

// Interfaces
type Props = {
  history: Object,
  match: Object
}

type State = {
  artist: Object,
  albums: Array<Object>
};

// Main Component
class ArtistPage extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      artist: {
        id: 'Loading',
        name: 'Loading'
      },
      albums: []
    }
  }

  /**
   * Parses the fetched artist
   * @param  {Object} albums The artist that will be parsed
   * @return {Object}
   */
  artistParser = (artist: Object): Object => ({
    id: artist.id,
    name: artist.name,
    popularity: artist.popularity,
    image: (artist.images && artist.images[0]&& artist.images[0].url) ? artist.images[0].url : defaultArtist,
    followers: (artist && artist.followers && artist.followers.total) ? utils.bigNumberParser(artist.followers.total.toString()) : '0'
  })

  /**
   * Parses the fetched group of albums
   * @param  {Array<Object>} albums The group of albums that will be parsed
   * @return {Array<Object>}
   */
  albumsParser = (albums: Array<Object>): Array<Object> => albums.map((album) => ({
    id: album.id,
    name: album.name,
    image: (album.images && album.images[0]&& album.images[0].url) ? album.images[0].url : defaultAlbum,
    releaseDate: album.release_date.split('-')[0]
  }))

  /**
   * Stores an artist in the component's state
   * @param  {Object} artist The artist that will be stored
   * @return {Void}
   */
  setArtist = (artist: Object): void => this.setState({artist: this.artistParser(artist)})

  /**
   * Stores a group of albums in the component's state
   * @param  {Array<Object>} albums The group of albums that will be stored
   * @return {Void}
   */
  setAlbums = (albums: Array<Object>): void => this.setState({albums: this.albumsParser(albums)})

  /**
   * Fetches the current artist and its albums to update the inital component's state
   * @return {Void}
   */
  componentWillMount = (): void => {
    spotifyApi.getArtist(this.props.match.params.id)
      .then(
        (data) => this.setArtist(data),
        (err) => console.error(err)
      )

    spotifyApi.getArtistAlbums(this.props.match.params.id)
      .then(
        (data) => this.setAlbums(_.orderBy(data.items, (album) => album.release_date, ['desc'])),
        (err) => console.error(err)
      )
  }

  render () {
    return (
      <div id='artist-page' className='page'>
        <div className='header'>
          <div onClick={() => this.props.history.goBack()} className='back-button' >
            <i className='fas fa-chevron-left' />
          </div>
        </div>
        <p className='type'>ARTIST</p>
        <Artist
          name={this.state.artist.name}
          popularity={this.state.artist.popularity}
          image={this.state.artist.image}
          followers={this.state.artist.followers}
        />
        <h2 className='section-title'>Albums</h2>
        <AlbumsGrid
          albums={this.state.albums}
          handleAlbumClick={(albumId) => this.props.history.push(`/albums/${albumId}`)}
        />
      </div>
    )
  }
}

export default ArtistPage
