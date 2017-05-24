import React from 'react'
import ReactDOM from 'react-dom'
import NavbarInstance from './Nav'

const App = React.createClass({
  render () {
    return (
      <div id='app'>
        <NavbarInstance />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
