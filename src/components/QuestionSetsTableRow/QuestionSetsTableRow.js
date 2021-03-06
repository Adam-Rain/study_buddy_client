//  This shows the list of all question sets
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const QuestionSetTableRow = ({ card, id, index }) => {
  console.log('this is card', card)
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td><Link to={`/question-sets/${id}`}>{card.topic}</Link></td>
      <td>{card.questions.length}</td>
      {/* <td>{card.owner}</td> */}
    </tr>
  )
}

export default withRouter(QuestionSetTableRow)
