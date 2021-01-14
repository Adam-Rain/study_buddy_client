import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QuestionSetForm = ({ topic, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Label>Topic</Form.Label>
    <Form.Control
      placeholder="ex. Java"
      value={topic}
      name="topic"
      onChange={handleChange}
    />
    <Button type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button>Cancel</Button>
    </Link>
  </Form>
)

export default QuestionSetForm
