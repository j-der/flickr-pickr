import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path = '/' component={App}>
      <IndexRoute component={App}/>
    </Route>
  </Router>,
document.getElementById('root')
)



