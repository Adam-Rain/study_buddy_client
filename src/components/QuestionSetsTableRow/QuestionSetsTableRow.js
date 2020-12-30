//  This shows the list of all question sets
import React from 'react'
import { Link } from 'react-router-dom'

const QuestionSetTableRow = ({ card, id }) => {
  console.log('this is card', card)
  return (
    <tr>
      <th scope="row">{card.id}</th>
      <td><Link to={`/question-sets/${id}`}>{card.topic}</Link></td>
      <td>{card.questions.length}</td>
      <td>{card.owner}</td>
    </tr>
  )
}

export default QuestionSetTableRow
