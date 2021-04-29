import React, { Component } from 'react'
import SingleCoffee from './SingleCoffee'

class Coffees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => response.json())
      .then((dataReceived) => this.setState({ data: dataReceived }))
      .catch()
  }

  render() {
    console.log(this.state.data)
    return (
      <>
        <ul className="allCoffees">
          {this.state.data.map(item => {
            return <SingleCoffee item={item} />
          })}
        </ul>
      </>
    )
  }
}

export default Coffees
