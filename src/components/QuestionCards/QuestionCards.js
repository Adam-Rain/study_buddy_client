// import React, { useState } from 'react'
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'
import QuestionSet from '../QuestionSet/QuestionSet'
import styles from './QuestionCards.css'
import ReactCardFlip from 'react-card-flip'

class QuestionCards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }
  render () {
    const card = this.props.card
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Card className={styles.maincontainer} key={QuestionSet.id}>
          <Card.Body className={styles.thecard} variant="top">
            <Card.Title className={styles.thefront}>{card.question}</Card.Title>
            <button className={styles.btn} onClick={this.handleClick}>Reveal Answer</button>
          </Card.Body>
        </Card>
        <Card className={styles.maincontainer} key={QuestionSet.id}>
          <Card.Body className={styles.thecard} variant="top">
            <Card.Text className={styles.theback}>{card.answer}</Card.Text>
            <button className={styles.btn} onClick={this.handleClick}>Return to Question</button>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    )
  }
}
//  display the question sets as individual cards with a title that opens the individual
//  challenge view
// const QuestionCards = ({ card, id }) => {
//   console.log(card)
//
//   const [flipped, setFlipped] = useState(false)
//
//   const handleClick = event => {
//     event.preventDefault()
//     setFlipped(!flipped)
//   }
//
//   return (
//     <Card className={styles.maincontainer} key={QuestionSet.id}>
//       <Card.Body className={styles.thecard} variant="top">
//         {flipped ? <Card.Text className={styles.theback}>{card.answer}</Card.Text> : <Card.Title className={styles.thefront}>{card.question}</Card.Title>}
//         <button className={styles.btn} onClick={handleClick}>{flipped ? 'Return To Question' : 'Reveal Answer'}</button>
//       </Card.Body>
//     </Card>
//   )
// }

export default QuestionCards
