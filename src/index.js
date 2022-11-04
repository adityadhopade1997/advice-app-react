import React from 'react'
import ReactDOM from 'react-dom' // we need the react dom so as we can hook onto the element in which the whole react application can get contained in.

import App from './App'

// our whole react app is hooked onto the root 
ReactDOM.render(<App/>, document.getElementById('root')); // ReactDOM it has 2  1.component we want to render and 2.element we want to hook onto

