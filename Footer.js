import React, { Component, State } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div style={{ color: 'white' }}>Allen Baek's website..</div>
      </div>
    )
  }
}

export default Footer
