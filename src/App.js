import React from 'react';
import './App.css';
import PropType from 'prop-types';

//State
//heart of React component, determines the rendering & behavious of component
//creates dynamic and interactive components
//While props from parent are immutable, STATE IS MUTABLE, change in state renders comp at browser
//Every change in state provide updated data to the user
//By default State can only be declared for class components ,however, with the advent of React hooks, React State can also be used in functional component.
//State is mutable only by parent comp which passes state value to its child components as props.
// Props cannot change as they are immutable, however, a child comp may request parent to make changes
// Parent component has to pass a function as a props  which will be used by child component to request a state change
// Once changes are done by parent, react automatically pass updated state value to all the child components where parent comp have passed state values as props
// This way react insures single source of truth and unidirectional data model

class MyComponent extends React.Component {
  state = {
    cityArray: ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  }

  render () {
    return (
      <ul>
        {this.state.cityArray.map(city =><li key={city}>{city}</li>)}
      </ul>
    )
  }

}

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App