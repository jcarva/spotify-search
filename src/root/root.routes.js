// @flow

// Dependencies
import * as React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// Pages
import Login from '../pages/login/login.container'
import Artists from '../pages/artists/artists.container'
import Artist from '../pages/artist/artist.container'
import Album from '../pages/album/album.container'

// Main Component
export default () => (
  <div id='routes'>
    {window.location.pathname.includes('index.html') && <Redirect to='/' />}
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Artists} />
        <Route path='/artist' component={Artist} />
        <Route path='/album' component={Album} />
        <Redirect to='/home' />
      </Switch>
    </Router>
  </div>
)
