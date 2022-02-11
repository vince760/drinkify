import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar
        bg="dark" style={{ opacity: '80%' }} expand="lg" sticky="top"
      >
        <Container
          style={{ height: '25px' }} fluid
        />
      </Navbar>
    );
  }
}

export default Header;
