import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Coffees from './components/Coffees'
import CoffeeDetails from './components/Coffees/CoffeeDetails'
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
            <Route path="/coffees/:slug" component={CoffeeDetails} />
            <Route path="/coffees" component={Coffees} />
            <Route path="/" component={Main} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  )
}

export default App
