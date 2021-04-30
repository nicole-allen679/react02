import React, { Component } from 'react'
import SingleCoffee from './SingleCoffee'

class Coffees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coffees: [],
    }
  }
  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => response.json())
      .then((data) => this.setState({ coffees: data }))
      .catch((err) => console.log(err))
  }
handleButtonClick(type) {
  this.setState({ coffees: null })
  fetch(`https://api.sampleapis.com/coffee/${type}`)
  .then(response => response.json())
  .then(data => this.setState({coffees: data}))
  .catch(err => console.log(err))
}
  render() {
    const { coffees } = this.state
    return (
      <>
        <h2>Coffees:</h2>
        <button onClick={() => this.handleButtonClick('hot')}>HOT</button>
        <button onClick={() => this.handleButtonClick('iced')}>ICED</button>
          {!coffees ? <p>Loading...</p> : coffees.map(coffee => {
            return <SingleCoffee key={coffee.id} coffee={coffee} />
          })}
      </>
    )
  }
}

export default Coffees
