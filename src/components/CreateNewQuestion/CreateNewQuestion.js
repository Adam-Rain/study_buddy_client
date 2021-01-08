import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import QuestionForm from '../QuestionForm/QuestionForm'

const CreateNewQuestion = props => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  console.log(props)

  const handleQuestionChange = event => {
    setQuestion(event.target.value)
    console.log('question', question)
  }

  const handleAnswerChange = event => {
    setAnswer(event.target.value)
    console.log('answer', answer)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    return axios({
      url: `${apiUrl}/questions/${props.match.params.id}`,
      method: 'POST',
      data: {
        question: {
          question: question,
          answer: answer,
          question_set: props.match.params.id
        }
      },
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
  }

  return (
    <div>
      <h1>Create New Question</h1>
      <QuestionForm id={props.match.params.id} question={question} answer={answer} handleQuestionChange={handleQuestionChange} handleAnswerChange={handleAnswerChange} handleSubmit={handleSubmit} />
    </div>

  )
}

export default CreateNewQuestion
