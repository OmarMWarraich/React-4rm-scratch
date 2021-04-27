
import React from 'react';
import './App.css';

// Conditional Rendering
// Conditional Rendering is about deciding what to render and when
// Simply renders if provided condition is met
// e.g, max limit message comp => renders error msg instd of alert in case of no city name provided on submit
// Three conditional rendering approaches;
// render if true (if else)
// ternary expression (condition ? true : false)
// Short circuit evaluation (&&,||)


function ErrorMessage(props) {
  const { message } = props

  return <span style={{ color: 'red'}}>{message}</span>
}


function ControlledInputBox (props) {
  const { handleInputChange, textBoxValue, noCityFlag } = props
  return (
    <>
    <input type='text' value={textBoxValue} onChange={handleInputChange} placeholder='Enter.' />
    {noCityFlag && <ErrorMessage message='Enter city name' />}
    </>
  )
}
function ButtonComponent (props) {
  return (<button style={{ backgroundColor: 'navy', color:'white'}}>Save changes</button>)
}
class MyComponent extends React.Component {
  state = {
    cityArray: ['Karachi', 'Lahore', 'Peshawar', 'Quetta'],
    textBoxValue: '',
    noCityFlag: false,
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
      textBoxValue: '',
      noCityFlag: false
    }))
  }
  removeCity = (e) => {
    const { cityArray } = this.state
    const { value } = e.target
    const newCityArray = cityArray.filter(city => city !== value)
    this.setState({
      cityArray: newCityArray
    })
  }

  handleForm = e => {
    const { textBoxValue } = this.state
    e.preventDefault()

    if (textBoxValue === '') {
      this.setState({ noCityFlag: true})
    } else {
      this.addCity()
    }
  }  

  render () {
    const { cityArray, textBoxValue, noCityFlag } = this.state
    
    return (
      <fieldset style={{backgroundColor:'red'}}>
      <form 
      onSubmit={this.handleForm} 
      style={{backgroundColor:'yellow'}}>
      <ul style={{ border: '1px solid black', padding: '10px'}}>
      {cityArray.map(city => (
        <li 
          className="li-styling"
          key={city}
          style={{ color: cityArray.length > 5 ? 'red' : 'green' }}>
          {city}
          <button 
            className="li-styling"
            value={city} 
            onClick={this.removeCity}>
            X
            </button>
             </li>))}
    </ul>
      <ControlledInputBox
         textBoxValue={textBoxValue} 
         handleInputChange={this.handleInputChange}
         />
      <ButtonComponent />
      </form>
      </fieldset>
    )
  }

}

function MyFunctionalComponent(props) {
  const { heading } = props
  return <h1>{heading}</h1>
}  
function App() {  
  const someCondition = true // try changing true with false

  if(someCondition === true){
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
      <MyFunctionalComponent heading='Cities List' />
      <MyComponent />
    </div>
  ) 
} else {
  return
  <h1>Nothing to display</h1>
}
}
export default App