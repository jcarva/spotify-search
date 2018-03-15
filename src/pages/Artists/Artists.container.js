/* @flow */

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from 'services/spotify'

// Components
import SearchField from 'containers/SearchField/SearchField.container'
import ArtistsGrid from 'components/ArtistsGrid/ArtistsGrid.component'

// Assets
import './Artists.scss'
import defaultArtist from 'assets/images/defaultArtist.svg'

// Interfaces
type Props = {
  history: Object
};

type State = {
  artists: Array<Object>
};

// Main Component
class ArtistsPage extends React.Component<Props, State> {
  searchInput: ?HTMLInputElement
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      artists: []
    }
  }

  /**
   * Parses the fetched group of artists
   * @param  {Array<Object>} artists The group of artists that will be parsed
   * @return {Array<Object>}
   */
  artistsParser = (artists: Array<Object>): Array<Object> => artists.map((artist) => ({
    id: artist.id,
    name: artist.name,
    image: (artist.images && artist.images[0] && artist.images[0].url) ? artist.images[0].url : defaultArtist,
    genre: (artist.genres && artist.genres[0]) ? artist.genres[artist.genres.length - 1] : '',
    popularity: artist.popularity
  }))

  /**
   * Stores a group of artists in the component's state
   * @param  {Array<Object>} artists The group of artists that will be stored
   * @return {Void}
   */
  setArtists = (artists: Array<Object>): void => this.setState({artists: this.artistsParser(artists)})

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
      <div id='artists-page' className='page'>
        <div className='header'>
          <SearchField dispatch={this.handleSearchSubmit} />
        </div>
        <h2 className='page-title'>Artists</h2>
        <ArtistsGrid
          artists={this.state.artists}
          handleArtistClick={(artistId) => this.props.history.push(`/artists/${artistId}`)}
        />
      </div>
    )
  }
}

export default ArtistsPage
