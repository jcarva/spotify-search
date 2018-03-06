// Dependencies
import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Components
import Root from './root/root.component.js'

// Assets
import './assets/styles/index.css'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
