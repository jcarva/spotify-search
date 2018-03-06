// @flow

// Dependencies
import * as React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// Pages
import Home from '../App'
const NoMatch = () => <h1>NoMatch</h1>

// Main Component
export default () => (
  <div id='routes'>
    {window.location.pathname.includes('index.html') && <Redirect to='/' />}
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path='/home' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
)
