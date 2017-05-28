import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

const NavbarInstance = React.createClass({
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand id="nav-header" class="container-fluid">
            <a href="#" id="header-text">ZenDen</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    )
  }
})

export default NavbarInstance
