/* @flow */

// Dependencies
import * as React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// Services
import spotifyApi from '../services/spotify'

// Pages
import Login from '../pages/Login/Login.container'
import Artists from '../pages/Artists/Artists.container'
import Artist from '../pages/Artist/Artist.container'
import Album from '../pages/Album/Album.container'

// Private Route
const PrivateRoute = (props: Object) => spotifyApi.getAccessToken()
  ? <Route {...props} />
  : <Redirect to='/login' />

// Artists Route
const ArtistsRoute = ({match}: Object) => (
  <Switch>
    <PrivateRoute exact path={`${match.url}/:id`} component={(Artist)} />
    <PrivateRoute path={'/'} component={(Artists)} />
  </Switch>
)

// Artists Route
const AlbunsRoute = ({match}: Object) => (
  <Switch>
    <PrivateRoute exact path={`${match.url}/:id`} component={(Album)} />
    <Redirect to='/artists' />
  </Switch>
)

// Main Component
export default () => (
  <div id='routes'>
    {window.location.pathname.includes('index.html') && <Redirect to='/' />}
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/home' component={Artists} />
        <Route path='/artists' component={ArtistsRoute} />
        <Route path='/albums' component={AlbunsRoute} />
        <Redirect to='/home' />
      </Switch>
    </Router>
  </div>
)
