// @flow

// Dependencies
import * as React from 'react'

// Assets
import './album.scss'

// Interfaces
type State = {
  nowPlaying: {
    name: string,
    albumArt: string
  }
};

// Main Component
class Album extends React.Component<void, State> {
  constructor (context: any) {
    super(context)
    this.state = {
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  render () {
    return (
      <div id='album-page'>
      Album Page
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
      </div>
    )
  }
}

export default Album
