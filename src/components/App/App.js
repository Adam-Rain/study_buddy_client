import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import QuestionSet from '../QuestionSet/QuestionSet'
import QuestionSets from '../QuestionSets/QuestionSets'
import HomeCarousel from '../Home/Home'
import CreateQuestionSet from '../CreateQuestionSet/CreateQuestionSet'
import CreateNewQuestion from '../CreateNewQuestion/CreateNewQuestion'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/question-sets' render={() => (
            <QuestionSets />
          )} />
          <Route exact path='/question-sets/:id' render={({ match, topic }) => (
            <QuestionSet user={user} topic={topic} match={match} />
          )} />
          <Route exact path='/' render={() => (
            <HomeCarousel />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/create-question-set' render={() => (
            <CreateQuestionSet user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/question-sets/:id/add' render={() => (
            <CreateNewQuestion user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
