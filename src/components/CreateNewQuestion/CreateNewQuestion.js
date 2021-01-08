import React, { useState } from 'react'
import QuestionForm from '../QuestionForm/QuestionForm'

const CreateNewQuestion = props => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleQuestionChange = event => {
    setQuestion(event.target.value)
    console.log('question', question)
  }

  const handleAnswerChange = event => {
    setAnswer(event.target.value)
    console.log('answer', answer)
  }

  return (
    <div>
      <h1>CreateNewQuestion</h1>
      <QuestionForm handleQuestionChange={handleQuestionChange} handleAnswerChange={handleAnswerChange} />
    </div>

  )
}

export default CreateNewQuestion
