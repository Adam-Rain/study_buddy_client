import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import QuestionSetForm from '../QuestionSetForm/QuestionSetForm'

const CreateQuestionSet = props => {
  const [topic, setTopic] = useState('')
  const [owner, setOwner] = useState('')

  const handleChange = event => {
    setTopic(event.target.value)
    setOwner(props.user.email)
    console.log(event.target.value)
    console.log('This is the user.email', props.user.email)
    console.log('topic', topic)
    console.log('owner', owner)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(props)
    const { history } = props
    return axios({
      url: `${apiUrl}/question_sets/`,
      method: 'POST',
      data: {
        question_set: {
          topic: topic,
          owner: owner
        }
      },
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
      .then(() => history.push('/question-sets'))
  }

  return (
    <QuestionSetForm topic={topic} handleChange={handleChange} handleSubmit={handleSubmit} cancelPath="/" owner={owner} />
  )
}

export default withRouter(CreateQuestionSet)
