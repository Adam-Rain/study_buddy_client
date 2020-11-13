import React, { useEffect, useState } from 'react'
import { indexQuestionSets } from '../../api/questions.js'

const QuestionSets = props => {
  const [questionSets, setQuestionSets] = useState([])

  useEffect(() => {
    indexQuestionSets()
      .then(res => setQuestionSets(res.data.question_sets))
      .catch(console.error)
  }, [])

  const qSets = questionSets.map(qSet => (
    <div key={qSet.id}>
      <h1>{qSet.topic}</h1>
    </div>
  ))

  return (
    <div>
      {qSets}
    </div>
  )
}

export default QuestionSets
