/* @flow */

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from '../../services/spotify'

// Components
import SearchField from '../../containers/SearchField/SearchField.container'

// Assets
import './Artists.scss'

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
  setArtists = (artists: Array<Object>): void => this.setState({artists})

  /**
   * Updates the inital component's state
   * @return {Void}
   */
  componentWillMount = (): void => this.getMyTopArtists()

  /**
   * Fetchs the top user artists
   * @return {Void}
   */
  getMyTopArtists = (): void => {
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
  handleSearchSubmit = (input: string): void => {
    input
      ? spotifyApi.searchArtists(input)
        .then(
          (data) => this.setArtists(data.artists.items),
          (err) => console.error(err)
        )
      : this.getMyTopArtists()
  }

  render () {
    return (
      <div id='artists-page'>
        Artists Page
        <SearchField dispatch={this.handleSearchSubmit} />
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
