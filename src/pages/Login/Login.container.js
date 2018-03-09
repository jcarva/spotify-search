/* @flow */

// Dependencies
import * as React from 'react'

// Services
import spotifyApi from 'services/spotify'

// Assets
import logo from 'assets/images/logo.svg'
import './Login.scss'

// Interfaces
type Props = {
  history: Object
};

// Main Component
class Login extends React.Component<Props, void> {
  /**
   * Obtains the token and if it exists set in the Spotify service
   * @return {Void}
   */
  componentWillMount = () => {
    const params = this.getHashParams()
    const token = params.access_token
    if (token) spotifyApi.setAccessToken(token)
  }

  /**
   * Checks if the current user is authenticated to redirect to the app features
   * @return {Void}
   */
  componentDidMount = () => {
    if (spotifyApi.getAccessToken()) this.props.history.push('/home')
  }

  /**
   * Obtains parameters from the hash of the URL
   * @return Object
   */
  getHashParams = (): Object => {
    let e, hashParams
    e = hashParams = {}
    let r = /([^&;=]+)=?([^&;]*)/g
    let q = window.location.hash.substring(1)
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2])
      e = r.exec(q)
    }
    return hashParams
  }

  /**
   * Generates a random string containing numbers and letters
   * @param  {number} length The length of the string
   * @return {string} The generated string
   */
  generateRandomString = (length: number): string => {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }

  /**
   * Redirects the user to VPlayer's Spotify authentication URL
   * @return {Void}
   */
  handleLogin = () => {
    const baseUrl = 'https://accounts.spotify.com/authorize'
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
      ? encodeURIComponent(process.env.REACT_APP_SPOTIFY_CLIENT_ID)
      : 'REACT_APP_SPOTIFY_CLIENT_ID'
    const scope = process.env.REACT_APP_SPOTIFY_APP_CONTEXT
      ? encodeURIComponent(process.env.REACT_APP_SPOTIFY_APP_CONTEXT)
      : 'REACT_APP_SPOTIFY_APP_CONTEXT'
    const redirectURI = encodeURIComponent(window.location.href)
    const state = encodeURIComponent(this.generateRandomString(16))
    const url = `${baseUrl}?response_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectURI}&state=${state}`

    window.location = url
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to VPlayer</h1>
        </header>
        <p className='login-btn' onClick={this.handleLogin}>
          Spotify Login
        </p>
      </div>
    )
  }
}

export default Login
