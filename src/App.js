import React from 'react';
import './App.css';

//Changing State
// To change state we use setState method. No matter how may key value pairs are there, just pass speific key and their new values you want to update
// Once setState method updates the state it rerenders that component and your compnent gets updated data.
// setState fn is an asynchronous function
// Two variations => 
// Object based approach //\\ this.setState({cityArray: [...this.state.cityArray, value]})) 
// Funcitonal Approach //\\ this.setState( (prevState) => {cityArray: [...this.state.cityArray]})

function ControlledInputBox (props) {
  const { handleInputChange, textBoxValue } = props
  return (
    <input type='text' value={textBoxValue} onChange={handleInputChange} />
  )
}
function ButtonComponent (props) {
  const { addCity } = props
  return (
    <button onClick={addCity}>Save changes</button>
  )
}
class MyComponent extends React.Component {
  state = {
    cityArray: ['Karachi', 'Lahore', 'Peshawar', 'Quetta'],
    textBoxValue: ''
  }
  handleInputChange = (e) => {
    const { value } = e.target
    this.setState({
      textBoxValue: value
    })
  }
  addCity = (city) => {
    const { textBoxValue } = this.state
    
    this.setState( prevState => ({
      cityArray: [...prevState.cityArray, textBoxValue],
      textBoxValue: ''
    }))
  }
  render () {
    const { cityArray, textBoxValue } = this.state
    
    return (
      <>
      <ul>
        {cityArray.map(city =><li key={city}>{city}</li>)}
      </ul>
      <ControlledInputBox textBoxValue={textBoxValue} handleInputChange={this.handleInputChange}/>
      <ButtonComponent addCity={() => this.addCity()}/>
      </>
    )
  }

}

function MyFunctionalComponent(props) {
  const { heading } = props
  return <h1>{heading}</h1>
}  
function App() {  
  return (
    <div>
      <MyFunctionalComponent heading='Cities List' />
      <MyComponent />
    </div>
  )
}
export default App