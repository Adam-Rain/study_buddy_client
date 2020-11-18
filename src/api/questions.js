import apiUrl from '../apiConfig.js'
import axios from 'axios'

export const indexQuestionSets = () => {
  return axios({
    url: `${apiUrl}/question_sets/`,
    method: 'GET'
  })
}

export const indexQuestions = (id) => {
  console.log('this is the id from props ', id)
  return axios({
    url: `${apiUrl}/questions/${id}`,
    method: 'GET'
  })
}
