import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Img from '../assets/images/download.png'

function header() {
  return (
    <Container>
      <Navbar bg='white' expand='lg' className='bg-body-tertiary'>
        <Navbar.Brand href='#home'>
          <img
            src={Img}
            alt='Logo'
            className='logo'
            style={{ width: '150px', height: '100px' }}
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto text-black  '>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Menu</Nav.Link>
            <Nav.Link href='#link'>About Us </Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default header
