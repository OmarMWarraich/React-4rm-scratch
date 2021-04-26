import React from 'react';
import './App.css';

class MyComponent extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello World! </h1>
      </div>
    )
  }
}

function App () {
  return (
    <MyComponent />
  )
}

export default App;