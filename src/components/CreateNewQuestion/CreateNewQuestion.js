import React, { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
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

  const handleSubmit = (event) => {
    event.preventDefault()
    return axios({
      url: `${apiUrl}/question_sets/${props.match.params.id}`,
      method: 'POST',
      data: {
        question_set: {
          questions: {
            question: question,
            answer: answer
          }
        }
      },
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
  }

  return (
    <div>
      <h1>CreateNewQuestion</h1>
      <QuestionForm question={question} answer={answer} handleQuestionChange={handleQuestionChange} handleAnswerChange={handleAnswerChange} handleSubmit={handleSubmit} />
    </div>

  )
}

export default CreateNewQuestion
