// @flow

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from '../../services/spotify'

// Assets
import './artists.scss'

// Interfaces
type Props = {
  history: Object
};

type State = {
  artists: Array<Object>
};

// Main Component
class Artists extends React.Component<Props, State> {
  searchInput: ?HTMLInputElement
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      artists: []
    }
  }

  /**
   * Stores a group of artists in the component's state
   * @param  {Array<Object>} artists The group of artists that will be stored
   * @return {Void}
   */
  setArtists = (artists: Array<Object>) => this.setState({artists})

  /**
   * Updates the inital component's state
   * @return {Void}
   */
  componentWillMount = () => this.getMyTopArtists()

  /**
   * Fetchs the top user artists
   * @return {Void}
   */
  getMyTopArtists = () => {
    spotifyApi.getMyTopArtists()
      .then(
        (data) => this.setArtists(data.items),
        (err) => console.error(err)
      )
  }

  /**
   * Fetches the artists according to the searchInput's value to update the current component's state
   * @return {Void}
   */
  handleSearchSubmit = () => {
    if (!(this.searchInput && this.searchInput.value !== '')) return

    spotifyApi.searchArtists(this.searchInput.value)
      .then(
        (data) => this.setArtists(data.artists.items),
        (err) => console.error(err)
      )
  }

  /**
   * Updates the current component's state according to the top user artists
   * @return {Void}
   */
  handleResetSearch = () => {
    this.getMyTopArtists()
    if (this.searchInput && this.searchInput.value) this.searchInput.value = ''
  }

  render () {
    return (
      <div id='artists-page'>
        Artists Page
        <input type='text' ref={(input) => { this.searchInput = input }} />
        <button onClick={this.handleSearchSubmit}>Search</button>
        <button onClick={this.handleResetSearch}>Reset</button>
        <div>
          {
            this.state.artists.map((artist) => {
              return (
                <div key={artist.id} className='artist-tile' onClick={() => this.props.history.push(`/artists/${artist.id}`)}>
                  {artist.name}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Artists
