import React from 'react'

function SingleCoffee({ item }) {
  return (
    <li key={item.id}>
      <div>
        <h3>{item.title}</h3>
        <span>{item.description}</span>
      </div>
    </li>
  )
}

export default SingleCoffee
