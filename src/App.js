import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/NavBar'
import Showcase from './components/Front-Page'
import Destinations from './components/Features'
import Footer from './components/Footers'
import Login from './components/Sign-In.js'
import SignUp from './components/Sign-Up'
import Error from './components/If-Error'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Showcase />
          <Destinations />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
