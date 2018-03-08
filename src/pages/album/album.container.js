// @flow

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from '../../services/spotify'

// Assets
import './album.scss'

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
class Album extends React.Component<Props, State> {
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
  setAlbum= (album: Object) => this.setState({album})

  /**
   * Stores a group of tracks in the component's state
   * @param  {Array<Object>} tracks The group of tracks that will be stored
   * @return {Void}
   */
  setTracks= (tracks: Array<Object>) => this.setState({tracks})

  /**
   * Fetches the current album and its tracks to update the inital component's state
   * @return {Void}
   */
  componentWillMount = () => {
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
      <div id='album-page'>
        <button onClick={() => this.props.history.goBack()}>back</button>
        <p>Album Page</p>
        <div className='album-tile'>
          {this.state.album.name}
        </div>
        <div>
          {
            this.state.tracks.map((track) => {
              return (
                <div key={track.id} className='track-tile'>
                  {track.name}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Album
