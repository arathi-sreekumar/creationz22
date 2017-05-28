import React from 'react'
import ReactDOM from 'react-dom'
import NavbarInstance from './Nav'
import '../../public/styles.css'

const App = React.createClass({
  render () {
    return (
    <div id="app" className="container-fluid" >
        <NavbarInstance />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
