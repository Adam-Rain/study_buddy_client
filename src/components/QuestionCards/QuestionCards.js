import React from 'react'
import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'
import QuestionSet from '../QuestionSet/QuestionSet'

//  display the question sets as individual cards with a title that opens the individual
//  challenge view
const QuestionCards = ({ card, id }) => {
  console.log(card)
  return (
    <Card key={QuestionSet.id}>
      <Card.Body style={{ textAlign: 'center' }} variant="top">
        <Card.Title>{card.question}</Card.Title>
        <Card.Text>{card.answer}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default QuestionCards
