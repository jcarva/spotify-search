/* @flow */

// Dependencies
import * as React from 'react'

// Assets
import './TracksList.scss'

// Main Component
const TracksList = ({tracks = [], millisToMinutesAndSeconds}: {tracks: Array<Object>, millisToMinutesAndSeconds: Function}) => {
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
                <td className='time'>{millisToMinutesAndSeconds(track.duration_ms)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default TracksList
