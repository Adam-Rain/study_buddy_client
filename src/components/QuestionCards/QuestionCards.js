import React from 'react'
import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'
import QuestionSet from '../QuestionSet/QuestionSet'
import styles from './QuestionCards.css'

//  display the question sets as individual cards with a title that opens the individual
//  challenge view
const QuestionCards = ({ card, id }) => {
  console.log(card)
  return (
    <Card className={styles.maincontainer} key={QuestionSet.id}>
      <Card.Body className={styles.thecard} style={{ textAlign: 'center' }} variant="top">
        <Card.Title className={styles.thefront}>{card.question}</Card.Title>
        <Card.Text className={styles.theback}>{card.answer}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default QuestionCards
