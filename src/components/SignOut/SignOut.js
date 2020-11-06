import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

const SignOut = props => {
  useEffect(() => {
    const { msgAlert, history, clearUser, user } = props

    signOut(user)
      .finally(() => msgAlert({
        heading: 'Signed Out Successfully',
        messagE: messages.signOutSuccess,
        variant: 'success'
      }))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
  })
  return ''
}

export default withRouter(SignOut)
