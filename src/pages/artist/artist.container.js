// @flow

// Dependencies
import * as React from 'react'

// Assets
import './artist.scss'

// Interfaces
type State = {
  nowPlaying: {
    name: string,
    albumArt: string
  }
};

// Main Component
class Artist extends React.Component<void, State> {
  constructor (context: any) {
    super(context)
    this.state = {
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  render () {
    return (
      <div id='artist-page'>
      Artist Page
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
      </div>
    )
  }
}

export default Artist
