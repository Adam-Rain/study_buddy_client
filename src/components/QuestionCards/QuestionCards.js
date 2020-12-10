import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'
import QuestionSet from '../QuestionSet/QuestionSet'
import styles from './QuestionCards.css'

//  display the question sets as individual cards with a title that opens the individual
//  challenge view
const QuestionCards = ({ card, id }) => {
  console.log(card)

  const [flipped, setFlipped] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    setFlipped(!flipped)
  }

  return (
    <Card className={styles.maincontainer} key={QuestionSet.id}>
      <Card.Body className={styles.thecard} variant="top">
        {flipped ? <Card.Text className={styles.theback}>{card.answer}</Card.Text> : <Card.Title className={styles.thefront}>{card.question}</Card.Title>}
        <button className={styles.btn} onClick={handleClick}>{flipped ? 'Return To Question' : 'Reveal Answer'}</button>
      </Card.Body>
    </Card>
  )
}
export default QuestionCards
