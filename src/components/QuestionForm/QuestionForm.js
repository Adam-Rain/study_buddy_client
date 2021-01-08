import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// const QuestionForm = ({ handleSubmit, handleChange, cancelPath }) => (
//   <Form onSubmit={handleSubmit}>
//     <Form.Label>Question</Form.Label>
//     <Form.Control
//       placeholder="Question"
//       //   value={question}
//       name="question"
//       onChange={handleChange}
//     />
//     <Form.Label>Answer</Form.Label>
//     <Form.Control
//       placeholder="Answer"
//       //   value={answer}
//       name="answer"
//       onChange={handleChange}
//     />
//     <Link to='/question-sets'>
//       <Button type="submit">Submit</Button>
//     </Link>
//     <Link to={cancelPath}>
//       <Button>Cancel</Button>
//     </Link>
//   </Form>
// )

const QuestionForm = ({ handleQuestionChange, handleAnswerChange }) => {
  return (
    <Form>
      <Form.Label>Question</Form.Label>
      <Form.Control
        placeholder="Question"
        onChange={handleQuestionChange}
        //   value={question}
        //       name="question"
      />
      <Form.Control
        placeholder="Answer"
        onChange={handleAnswerChange}
        //   value={question}
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
