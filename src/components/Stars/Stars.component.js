/* @flow */

// Dependencies
import * as React from 'react'

// Assets
import './Stars.css'

// Interfaces
type Props = {
  popularity: number
}

// Main Component
const Stars = ({popularity}: Props) => {
  let stars = []
  for (let star=0; star < Math.round(popularity/20); star++) {
    stars.push(<i key={star} className='fas fa-star' />)
  }

  return (
    <div className='stars'>
      {stars}
    </div>
  )
}

export default Stars
