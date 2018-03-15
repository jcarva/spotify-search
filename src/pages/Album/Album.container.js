/* @flow */

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from 'services/spotify'

// Components
import Album from 'components/Album/Album.component'
import TracksList from 'components/TracksList/TracksList.component'

// Assets
import './Album.scss'
import defaultArtist from 'assets/images/defaultArtist.svg'

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
   * Stores an album in the component's state
   * @param  {Object} album The album that will be stored
   * @return {Void}
   */
  setAlbum= (album: Object): void => this.setState({album})

  /**
   * Stores a group of tracks in the component's state
   * @param  {Array<Object>} tracks The group of tracks that will be stored
   * @return {Void}
   */
  setTracks= (tracks: Array<Object>): void => this.setState({tracks})

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

  albumDuration = () => this.state.tracks && this.state.tracks.length
    ? this.state.tracks.reduce((a, b) => ({duration_ms: a.duration_ms + b.duration_ms})).duration_ms
    : 0

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
          artist={this.state.album.artists && this.state.album.artists['0'] ? this.state.album.artists['0'].name : ''}
          popularity={this.state.album.popularity}
          releaseDate={this.state.album.release_date ? this.state.album.release_date.split('-')[0] : ''}
          albumDetails={{
            totalOfSongs: this.state.tracks.length,
            albumDuration: this.albumDuration()
          }}
          image={(this.state.album.images && this.state.album.images[0]&& this.state.album.images[0].url)
            ? this.state.album.images[0].url
            : defaultArtist
          }
        />
        <h2 className='section-title'>Tracks</h2>
        <TracksList tracks={this.state.tracks} />
      </div>
    )
  }
}

export default AlbumPage
