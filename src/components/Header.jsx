import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
       <Navbar expand="sm" variant="dark" style={{ height: '70px', backgroundColor: 'black' }}>
        <Container fluid>
          <Navbar.Brand href="#home" className='fs-1 '>EagerEscapes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={{ marginLeft: '50%' }}>
              <Nav.Link href="#home" className='fs-5'>Home</Nav.Link>
              <Nav.Link href="#features" className='fs-5'>Features</Nav.Link>
              <Nav.Link href="#services" className='fs-5'>Services</Nav.Link>
              <Nav.Link href="#about" className='fs-5'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
