
import React from 'react';
import './App.css';

// Constructor

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: 'Aamir'
    }
    this.printMessage = this.printMessage.bind(this)
  }

  printMessage () {
    return <h1> {`${this.state.firstName} ${this.props.message}`} </h1>
  }

  render () {
    return this.printMessage()
  }
}

export default App