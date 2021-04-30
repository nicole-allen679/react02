import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Coffees from './components/Coffees'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </header>
        <section className="main-section">
          <Switch>
            <Route path="/coffee">
              <Coffees />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  )
}

export default App
