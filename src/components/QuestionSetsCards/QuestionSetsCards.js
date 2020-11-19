//  This shows the list of all question sets
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import QuestionSet from '../QuestionSet/QuestionSet'

//  display the question sets as individual cards with a title that opens the individual
//  challenge view
const QuestionSetsCards = ({ card, id }) => {
  return (
    <Card key={QuestionSet.id}>
      <Card.Body variant="top">
        <Card.Title><Link to={`/question-sets/${id}`}>{card.topic}</Link></Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default QuestionSetsCards
