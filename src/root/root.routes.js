// @flow

// Dependencies
import * as React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// Services
import spotifyApi from '../services/spotify'

// Pages
import Login from '../pages/login/login.container'
import Artists from '../pages/artists/artists.container'
import Artist from '../pages/artist/artist.container'
import Album from '../pages/album/album.container'

// Private Route
const PrivateRoute = (props) => spotifyApi.getAccessToken()
  ? <Route {...props} />
  : <Redirect to='/login' />

// Main Component
export default () => (
  <div id='routes'>
    {window.location.pathname.includes('index.html') && <Redirect to='/' />}
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/home' component={Artists} />
        <PrivateRoute path='/artists' component={Artists} />
        <PrivateRoute path='/artist' component={Artist} />
        <PrivateRoute path='/album' component={Album} />
        <Redirect to='/home' />
      </Switch>
    </Router>
  </div>
)
