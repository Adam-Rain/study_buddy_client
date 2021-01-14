import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import QuestionSet from '../QuestionSet/QuestionSet'
import styles from './QuestionCards.css'
import ReactCardFlip from 'react-card-flip'

const QuestionCards = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setIsFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card className={styles.maincontainer} key={QuestionSet.id}>
        <Card.Body className={styles.thecard} variant="top">
          <Card.Title className={styles.thefront}>{card.question}</Card.Title>
          <button className={styles.btn} onClick={handleClick}>Reveal Answer</button>
        </Card.Body>
      </Card>
      <Card className={styles.maincontainer} key={QuestionSet.id}>
        <Card.Body className={styles.thecard} variant="top">
          <Card.Text className={styles.theback}>{card.answer}</Card.Text>
          <button className={styles.btn} onClick={handleClick}>Return to Question</button>
        </Card.Body>
      </Card>
    </ReactCardFlip>
  )
}

export default QuestionCards
