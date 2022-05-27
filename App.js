import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CloseButton from 'react-bootstrap/CloseButton'
import Header from './Header.js'
import Footer from './Footer.js'
import React, { useState } from 'react'
import './App.js'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [exist, setExist] = useState(1)
  const [submit, setSubmit] = useState(1)

  const handleSubmit = () => {
    console.log('Username : ' + email)
    console.log('Password : ' + password)

    setSubmit(0)
  }

  const handleEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handleExist = () => {
    setExist(0)
  }

  return (
    <div>
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <meta
            name='description'
            content='Web site created using create-react-app'
          />

          <title>Homework</title>
        </head>
        <body>
          <Header />

          <div id='root'>
            {exist === 1 && (
              <Card style={{ width: '30rem' }} className='mx-auto mt-5'>
                <Card.Body>
                  <div>
                    <CloseButton onClick={handleExist} />
                  </div>
                  <Card.Title className='text-center'>
                    Sign in to your account
                  </Card.Title>

                  <Form>
                    {submit === 1 && (
                      <div>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={handleEmail}
                          />
                        </Form.Group>

                        <Form.Group
                          className='mb-3'
                          controlId='formBasicPassword'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={handlePassword}
                          />
                        </Form.Group>
                      </div>
                    )}

                    {submit === 0 && (
                      <div>
                        <Form.Group
                          className='mb-3 text-danger'
                          controlId='validationFormik03'>
                          <Form.Label>Email address</Form.Label>

                          <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={handleEmail}
                          />

                          <small id='emailHelp' class='form-text text-danger'>
                            Invalid Email
                          </small>
                        </Form.Group>

                        <Form.Group
                          className='mb-3 text-danger'
                          controlId='formBasicPassword'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={handlePassword}
                          />

                          <small id='emailHelp' class='form-text text-danger'>
                            Invalid Password
                          </small>
                        </Form.Group>
                      </div>
                    )}

                    <div className='d-grid gap-2 pb-2'>
                      <Button
                        variant='primary'
                        onClick={(handleSubmit, handleSubmit)}>
                        Sign In
                      </Button>
                    </div>

                    <Row>
                      <Col>
                        <Card.Text>Dont have account?</Card.Text>
                      </Col>
                      <Col>
                        <p class='right'>Forgot password?</p>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            )}
          </div>
          <Footer />
        </body>
      </html>
    </div>
  )
}
