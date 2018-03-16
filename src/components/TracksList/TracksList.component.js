/* @flow */

// Dependencies
import * as React from 'react'

// Services
import utils from 'services/utils'

// Assets
import './TracksList.css'

// Main Component
const TracksList = ({tracks = []}: {tracks: Array<Object>}) => {
  return (
    <table className='tracks-list'>
      <tbody>
        <tr className='header'>
          <th>#</th>
          <th className='name'>TITLE</th>
          <th className='track-time'><i className='far fa-clock' /></th>
        </tr>
        {
          tracks.length > 0 && tracks.map((track, index) => {
            return (
              <tr key={track.id} className='track'>
                <td>{index+1}</td>
                <td className='name'>{track.name}</td>
                <td className='time'>{utils.millisToMinutesAndSeconds(track.duration_ms)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TracksList
