import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Footer from '../Footer/Footer'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

const SignIn = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = props

    signIn(email, password)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#sign-in">
              <Nav.Item>
                <Nav.Link href="#sign-in">Sign In</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#sign-up">Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={onSignIn}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        {/* <h3>Sign In</h3>
        <Form onSubmit={onSignIn}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form> */}
      </div>
      <Footer/>
    </div>
  )
}

export default withRouter(SignIn)
