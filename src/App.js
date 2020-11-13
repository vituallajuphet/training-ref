import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import Container from './components/Container'
import { Dashboard, About, Blog, Contact, Login } from './pages'
import './sass/_main.scss'

import { Provider } from 'react-redux'
import store from './redux/store'

console.log(Footer)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Header />
          <Container name='container' space='space'>
            <div className='content'>
              {switchRouterMenu()}
            </div>
          </Container>
          <Footer />
        </Router>
    </div>
    </Provider>
  )

  function switchRouterMenu() {
    return (
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
      </Switch>
    )
  }
}

const Homepage = () => (
  <Dashboard />
)

export default App;
