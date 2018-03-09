/* @flow */

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from '../../services/spotify'

// Assets
import './artist.scss'

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
class Artist extends React.Component<Props, State> {
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
   * Stores an artist in the component's state
   * @param  {Object} artist The artist that will be stored
   * @return {Void}
   */
  setArtist = (artist: Object): void => this.setState({artist})

  /**
   * Stores a group of albums in the component's state
   * @param  {Array<Object>} albums The group of albums that will be stored
   * @return {Void}
   */
  setAlbums= (albums: Array<Object>): void => this.setState({albums})

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
        (data) => this.setAlbums(data.items),
        (err) => console.error(err)
      )
  }

  render () {
    return (
      <div id='artist-page'>
        <button onClick={() => this.props.history.goBack()}>back</button>
        <p>Artist Page</p>
        <div className='artist-tile'>
          {this.state.artist.name}
        </div>
        <div>
          {
            this.state.albums.map((album) => {
              return (
                <div key={album.id} className='album-tile' onClick={() => this.props.history.push(`/albums/${album.id}`)}>
                  {album.name}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Artist
