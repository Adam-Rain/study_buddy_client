import React, { useEffect, useState } from 'react'
import { indexQuestions } from '../../api/questions.js'

const QuestionSet = props => {
  const [questionSet, setQuestionSet] = useState([])

  useEffect(() => {
    console.log('these are props for questions ', props)
    indexQuestions(props.match.params.id)
      .then(res => setQuestionSet(res.data.questions))
      .catch(console.error)
  }, [])

  const questions = questionSet.map(question => (
    <div key={question.id}>
      <h2>{question.question}</h2>
      <p>{question.answer}</p>
    </div>
  ))

  return (
    <div>
      {questions}
    </div>
  )
}

// export default QuestionSet

// import React from 'react'
//
// const QuestionSet = props => {
//   return (
//     <h1>Hello World</h1>
//   )
// }

export default QuestionSet
