import apiUrl from '../apiConfig.js'
import axios from 'axios'

export const indexQuestionSets = () => {
  return axios({
    url: `${apiUrl}/question_sets/`,
    method: 'GET'
  })
}

export const indexQuestions = () => {
  return axios({
    url: `${apiUrl}/questions/1`,
    method: 'GET'
  })
}
