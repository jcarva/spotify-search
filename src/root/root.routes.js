// @flow

// Dependencies
import * as React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

// Pages
import Home from '../App'
const NoMatch = () => <h1>NoMatch</h1>

// Main Component
export default () => (
  <div id='root'>
    <div>
      <h1>Header</h1>
      {window.location.pathname.includes('index.html') && <Redirect to='/' />}
    </div>
    <div>
      <h1>SideBar</h1>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route path='/home' component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
    <div>
      <h1>FooterBar</h1>
    </div>
  </div>
)
