import React, { useEffect, useState } from 'react'
import { indexQuestions, indexQuestionSets } from '../../api/questions.js'

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
    console.log('This is questionSet.id ', questionSet.id)
    console.log('This is questionSet.topic ', questionSet.topic)
    console.log('This is props.match.params.id ', props.match.params.id)
    // if (questionSets.id === props.match.params.id) {
    // if (questionSet.id - props.match.params.id === 0) {
    if (parseInt(questionSet.id) === parseInt(props.match.params.id)) {
      return (
        <div key={questionSet.id}>
          <h1>{questionSet.topic}</h1>
        </div>
      )
    }
  })

  const questions = questionSet.map(question => (
    <div key={question.id}>
      <h2>{question.question}</h2>
      <p>{question.answer}</p>
    </div>
  ))

  return (
    <div>
      {topic}
      {questions}
    </div>
  )
}

export default QuestionSet
