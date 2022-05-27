import React, { Component, State } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Header extends React.Component {
  render() {
    return (
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Home</Navbar.Brand>
          <Nav className='me-auto'>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button>Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default Header
