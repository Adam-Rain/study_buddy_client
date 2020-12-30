import React, { useEffect, useState } from 'react'
import { indexQuestions, indexQuestionSets } from '../../api/questions.js'
import QuestionCards from '../QuestionCards/QuestionCards'
import CardGroup from 'react-bootstrap/CardGroup'
import styles from './QuestionSet.css'

const QuestionSet = props => {
  const [questionSet, setQuestionSet] = useState([])
  const [questionSets, setQuestionSets] = useState([])

  useEffect(() => {
    indexQuestions(props.match.params.id)
      .then(res => setQuestionSet(res.data.questions))
      .catch(console.error)
    indexQuestionSets()
      .then(res => setQuestionSets(res.data.question_sets))
  }, [])

  const topic = questionSets.map(questionSet => {
    if (parseInt(questionSet.id) === parseInt(props.match.params.id)) {
      return (
        <div key={questionSet.id}>
          <h1>{questionSet.topic}</h1>
          {/* { props.user.id === questionSet.owner ? (<div><button>Add new questions</button></div>) : null } */}
        </div>
      )
    }
  })
  const questions = questionSet.map(question => (
    <QuestionCards key={question.id} id={question.id} card={question} />
  ))
  return (
    <div>
      <div style={{ textAlign: 'center' }} className='container'>
        {topic}
      </div>
      <CardGroup className = {styles.cardgroup}>
        {questions}
      </CardGroup>
    </div>
  )
}

export default QuestionSet
