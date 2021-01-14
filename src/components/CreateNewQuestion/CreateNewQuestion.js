import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import QuestionForm from '../QuestionForm/QuestionForm'

const CreateNewQuestion = props => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleQuestionChange = event => {
    setQuestion(event.target.value)
  }

  const handleAnswerChange = event => {
    setAnswer(event.target.value)
  }
  const { history, user, match } = props

  const handleSubmit = (event) => {
    event.preventDefault()
    return axios({
      url: `${apiUrl}/questions/${match.params.id}`,
      method: 'POST',
      data: {
        question: {
          question: question,
          answer: answer,
          question_set: match.params.id
        }
      },
      headers: {
        'Authorization': `Token ${user.token}`
      }
    })
      .then(() => history.push(`/question-sets/${match.params.id}`))
  }

  return (
    <div>
      <h1>Create New Question</h1>
      <QuestionForm
        id={match.params.id}
        question={question}
        answer={answer}
        handleQuestionChange={handleQuestionChange}
        handleAnswerChange={handleAnswerChange}
        handleSubmit={handleSubmit}
      />
    </div>

  )
}

export default withRouter(CreateNewQuestion)
