import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { withRouter } from 'react-router-dom'
import { indexQuestionSets } from '../../api/questions.js'
import QuestionSetTableRow from '../QuestionSetsTableRow/QuestionSetsTableRow'

const QuestionSets = props => {
  const [questionSets, setQuestionSets] = useState([])
  useEffect(() => {
    indexQuestionSets()
      .then(res => setQuestionSets(res.data.question_sets))
      .catch(console.error)
  }, [])
  const qSets = questionSets.map((qSet, index) => (
    <QuestionSetTableRow index={index} key={qSet.id} id={qSet.id} card={qSet}/>
  ))

  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>Click a topic to view the questions</h1>
      <table className="table table-bordered" style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Number of Questions</th>
            {/* <th scope="col">Created By</th> */}
          </tr>
        </thead>
        <tbody>
          {qSets}
        </tbody>
      </table>
      <Footer/>
    </Fragment>
  )
}

export default withRouter(QuestionSets)
