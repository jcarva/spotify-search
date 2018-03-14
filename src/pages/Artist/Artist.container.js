/* @flow */

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from 'services/spotify'

import Artist from 'components/Artist/Artist.component'

// Assets
import './Artist.scss'
import defaultArtist from 'assets/images/defaultArtist.svg'

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

  followersParser = (followers: string): string => {
    followers = followers.toString().split('').reverse().join('')
    let result = ''
    const gapSize = 3

    while (followers.length > 0) {
      result = result + ' ' + followers.substring(0, gapSize)
      followers = followers.substring(gapSize)
    }

    return result.split('').reverse().join('')
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
          image={(this.state.artist.images && this.state.artist.images[0]&& this.state.artist.images[0].url)
            ? this.state.artist.images[0].url
            : defaultArtist
          }
          followers={(this.state.artist && this.state.artist.followers && this.state.artist.followers.total)
            ? this.followersParser(this.state.artist.followers.total.toString())
            : '0'
          }
        />
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

export default ArtistPage
