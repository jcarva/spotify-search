import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './root/root.component.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
