import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { indexQuestionSets } from '../../api/questions.js'

const QuestionSets = props => {
  console.log('these are props ', props)
  const [questionSets, setQuestionSets] = useState([])

  useEffect(() => {
    indexQuestionSets()
      .then(res => setQuestionSets(res.data.question_sets))
      .catch(console.error)
  }, [])

  const qSets = questionSets.map(qSet => (
    <div key={qSet.id}>
      <h1><Link to={`/question-sets/${qSet.id}`} topic={qSet.topic}>{qSet.topic}</Link></h1>
    </div>
  ))

  return (
    <div>
      {qSets}
    </div>
  )
}

export default withRouter(QuestionSets)
