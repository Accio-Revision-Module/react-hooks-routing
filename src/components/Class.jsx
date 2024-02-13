import React, { Component } from 'react'

export default class Class extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }


    handleUpdate = () => {
        this.setState({
            ...this.state,
            counter: this.state.counter + 1,
        })
    }

    componentDidMount() {
        console.log("Only once")
    }

    componentDidUpdate() {
        console.log("Update the state")
    }

    componentWillUnmount() {
        console.log("Removed from the screen")
    }

  render() {
    return (
        <>
            <h1>Class</h1>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.handleUpdate}>Increment</button>
        </>
    )
  }
}
