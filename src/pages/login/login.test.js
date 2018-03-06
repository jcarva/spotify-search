// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Login from './login.container'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Login />, div)
  ReactDOM.unmountComponentAtNode(div)
})
