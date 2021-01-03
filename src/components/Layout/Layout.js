//  This file is the 'wrapper' for all of the content rendered on the page
import React from 'react'
import Footer from '../Footer/Footer'

const Layout = props => (
  <div>
    <h1>Study Buddy</h1>
    {props.children}
    <Footer />
  </div>
)

export default Layout
