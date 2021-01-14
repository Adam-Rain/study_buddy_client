//  This file is the 'wrapper' for all of the content rendered on the page
import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'

const Layout = props => (
  <Fragment>
    <h1>Study Buddy</h1>
    {props.children}
    <Footer />
  </Fragment>
)

export default Layout
