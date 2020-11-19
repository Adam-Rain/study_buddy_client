//  This shows the list of all question sets
import React from 'react'
import Card from 'react-bootstrap/Card'
import QuestionSet from '../QuestionSet/QuestionSet'

//  display the question sets as individual cards with a title that opens the individual
//  challenge view
const QuestionSetsCards = ({ card }) => {
  return (
    <div className='row'>
      <div className='col-sm-8'>
        <div>
          <Card style={{ width: '18rem' }} key={QuestionSet.id}>
            <Card.Body>
              <Card.Title>{card.topic}</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default QuestionSetsCards
