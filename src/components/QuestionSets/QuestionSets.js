import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { indexQuestionSets } from '../../api/questions.js'
import QuestionSetsCards from '../QuestionSetsCards/QuestionSetsCards'
import CardGroup from 'react-bootstrap/CardGroup'

const QuestionSets = props => {
  console.log('these are props ', props)
  const [questionSets, setQuestionSets] = useState([])

  useEffect(() => {
    indexQuestionSets()
      .then(res => setQuestionSets(res.data.question_sets))
      .catch(console.error)
  }, [])
  console.log('These are questionSets ', questionSets)
  const qSets = questionSets.map(qSet => (
    // {/* <h1><Link to={`/question-sets/${qSet.id}`}>{qSet.topic}</Link></h1> */}
    //  key={qSet.id} to={`/question-sets/${qSet.id}`}
    <QuestionSetsCards key={qSet.id} id={qSet.id} card={qSet}/>
  ))

  return (
    <CardGroup>
      {qSets}
    </CardGroup>
  )
}

export default withRouter(QuestionSets)
