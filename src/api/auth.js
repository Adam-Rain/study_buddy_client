import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (email, password, passwordConfirmation) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up/',
    data: {
      credentials: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    }
  })
}

export const signIn = (email, password) => {
  return axios({
    url: apiUrl + '/sign-in/',
    method: 'POST',
    data: {
      credentials: {
        email: email,
        password: password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const changePassword = (newPassword, oldPassword, user) => {
  return axios({
    url: apiUrl + '/change-pw/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      passwords: {
        old: oldPassword,
        new: newPassword
      }
    }
  })
}
