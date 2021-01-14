import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { GoMarkGithub } from 'react-icons/go'

const Footer = () => (
  <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand>&#169; Rain Robinson &amp; Adam Turman</Navbar.Brand>
      <Navbar.Brand>
        <a href='https://github.com/Adam-Rain'>
          <span>View Our Code on GitHub </span>
          <GoMarkGithub style={{ verticalAlign: 'text-bottom' }} />
        </a>
      </Navbar.Brand>
    </Container>
  </Navbar>
)

export default Footer
