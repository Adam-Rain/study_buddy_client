import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QuestionForm = ({ handleQuestionChange, handleAnswerChange, handleSubmit, question, answer, id }) => {
  console.log(id)
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Question</Form.Label>
      <Form.Control
        placeholder="Question"
        onChange={handleQuestionChange}
        value={question}
        //       name="question"
      />
      <Form.Label>Answer</Form.Label>
      <Form.Control
        placeholder="Answer"
        onChange={handleAnswerChange}
        value={answer}
        //       name="question"
      />
      <Button type="submit">Submit</Button>
      <Link to='/question-sets'>
        <Button>Cancel</Button>
      </Link>
    </Form>
  )
}

export default QuestionForm
