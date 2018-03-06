// @flow

// Dependencies
import * as React from 'react'

// Assets
import './artists.scss'

// Interfaces
type State = {
  nowPlaying: {
    name: string,
    albumArt: string
  }
};

// Main Component
class Artists extends React.Component<void, State> {
  constructor (context: any) {
    super(context)
    this.state = {
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  render () {
    return (
      <div id='artists-page'>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
      </div>
    )
  }
}

export default Artists
