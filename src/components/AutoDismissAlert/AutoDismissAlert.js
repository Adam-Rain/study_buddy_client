import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'

import './AutoDismissAlert.scss'

function AutoDismissAlert (props) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setInterval(() =>
      setShow(null), 5000)
    return () => {
      clearInterval(timer)
    }
  })
  const handleClose = () => setShow(false)
  return (
    <Alert
      dismissible
      show={show}
      variant={props.variant}
      onClose={handleClose}
    >
      <div className="container">
        <Alert.Heading>
          {props.heading}
        </Alert.Heading>
        <p className="alert-body">{props.message}</p>
      </div>
    </Alert>
  )
}
// }

export default AutoDismissAlert
