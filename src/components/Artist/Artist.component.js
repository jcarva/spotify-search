/* @flow */

// Dependencies
import * as React from 'react'

// Components
import Stars from 'components/Stars/Stars.component'

// Interfaces
type Props = {
  name: string,
  image: string,
  followers:string,
  popularity: number
}

// Assets
import './Artist.scss'

// Main Component
const Artist = ({name, image, followers, popularity}: Props) => {
  return (
    <div className='artist'>
      <img className='avatar' src={image} />
      <div className='details'>
        <div className='header'>
          <h2 className='name'>{name}</h2>
          <Stars popularity={popularity} />
        </div>
        <div className='followers'>
          <h2 className='total'>{followers}</h2>
          <h3 className='description'>Followers</h3>
        </div>
      </div>
    </div>
  )
}

export default Artist
