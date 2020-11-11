import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './common/Header/Header'
import Container from './components/Container'
import { Dashboard, About, Shop } from './pages'
import './sass/_main.scss'


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Container name='container' space='space'>
          <div className='content'>
            {switchRouterMenu()}
          </div>
        </Container>
      </Router>
    </div>
  )

  function switchRouterMenu() {
    return (
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/about' component={About} />
        <Route path='/shop' component={Shop} />
      </Switch>
    )
  }
}

const Homepage = () => (
  <Dashboard />
)

export default App;
