import React from 'react'

function Child({counter}) {
    console.log("Child component rendered");

  return (
    <div>
        <h3>Child</h3>
        <p>Counter: {counter}</p>
    </div>
  )
}

export default Child