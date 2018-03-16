/* @flow */

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from 'services/spotify'
import utils from 'services/utils'

// Components
import Album from 'components/Album/Album.component'
import TracksList from 'components/TracksList/TracksList.component'

// Assets
import './Album.css'
import defaultAlbum from 'assets/images/defaultAlbum.svg'

// Interfaces
type Props = {
  history: Object,
  match: Object
}

type State = {
  album: Object,
  tracks: Array<Object>
};

// Main Component
class AlbumPage extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      album: {
        id: 'Loading',
        name: 'Loading'
      },
      tracks: []
    }
  }

  /**
   * Parses the fetched album
   * @param  {Object} album The album that will be parsed
   * @return {Object}
   */
  albumParser = (album: Object): Object => ({
    id: album.id,
    name: album.name,
    image: (album.images && album.images[0] && album.images[0].url) ? album.images[0].url : defaultAlbum,
    artist: album.artists && album.artists[0] && album.artists[0].name ? album.artists[0].name : '',
    popularity: album.popularity,
    releaseDate: album.release_date && album.release_date.split('-')[0] ? album.release_date.split('-')[0] : ''
  })

  /**
   * Stores an album in the component's state
   * @param  {Object} album The album that will be stored
   * @return {Void}
   */
  setAlbum = (album: Object): void => this.setState({album: this.albumParser(album)})

  /**
   * Stores a group of tracks in the component's state
   * @param  {Array<Object>} tracks The group of tracks that will be stored
   * @return {Void}
   */
  setTracks = (tracks: Array<Object>): void => this.setState({tracks})

  /**
   * Fetches the current album and its tracks to update the inital component's state
   * @return {Void}
   */
  componentWillMount = (): void => {
    spotifyApi.getAlbum(this.props.match.params.id)
      .then(
        (data) => this.setAlbum(data),
        (err) => console.error(err)
      )

    spotifyApi.getAlbumTracks(this.props.match.params.id)
      .then(
        (data) => this.setTracks(data.items),
        (err) => console.error(err)
      )
  }

  render () {
    return (
      <div id='album-page' className='page'>
        <div className='header'>
          <div onClick={() => this.props.history.goBack()} className='back-button' >
            <i className='fas fa-chevron-left' />
          </div>
        </div>
        <p className='type'>ALBUM</p>
        <Album
          name={this.state.album.name}
          image={this.state.album.image}
          artist={this.state.album.artist}
          popularity={this.state.album.popularity}
          releaseDate={this.state.album.releaseDate}
          albumDetails={{
            totalOfSongs: this.state.tracks.length,
            albumDuration: utils.albumDurationCalculator(this.state.tracks)
          }}
        />
        <h2 className='section-title'>Tracks</h2>
        <TracksList tracks={this.state.tracks} />
      </div>
    )
  }
}

export default AlbumPage
