// @flow

// Dependencies
import * as React from 'react'

// Assets
import logo from '../../assets/images/logo.svg'
import './login.scss'

// Interfaces
type Props = {};

type State = {};

// Main Component
class Login extends React.Component<Props, State> {
  handleClassClick = (event: Object): void => console.log(event.target.className)

  render () {
    return (
      <div className='App' onClick={this.handleClassClick}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to VPlayer</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Login
