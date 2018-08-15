import React from 'react'
import './Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default () => {
  return (
    <div>
      <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">swim.bike.run</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Rank</NavItem>
            <NavItem eventKey={2} href="#">Training Log</NavItem>
          </Nav>
        </Navbar>
    </div>
  )
}