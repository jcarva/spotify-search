// Dependencies
import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Components
import Root from './root/Root.component.js'

// Assets
import 'assets/styles/global.css'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
