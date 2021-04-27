
import React from 'react';
// import './App.css';
import styled from 'styled-components';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ErrorMessage from '../ErrorMessage/ErrorMesage';
import ControlledInputBox from '../ControlledInputBox';




const Button2 = styled(Button)`
  background-color: silver;
  `

class MyComponent extends React.Component {
  state = {
    cityArray: [],
    textBoxValue: '',
    errorShowFlag: false
  }

  componentDidMount () {
      /** External API calls can be done here and update the state when data recieved */
    const dataRecievedFromAPICall = [
      'Karachi', 
      'Lahore',
      'Peshawar',
      'Quetta',
      'Swat'
    ]

    setTimeout(() => {
      this.setState({
        cityArray: dataRecievedFromAPICall
      })
    }, 1000)
  }

  componentDidUpdate ( prevProps, prevState ) {
    const cityArrayPrev  = prevState.cityArray
    const cityArrayNew = this.state.cityArray

    
    if (cityArrayPrev !== cityArrayNew) {
      console.log('State updated with new data', cityArrayNew)
    }
  }


  handleInputChange = e => {
    const { value } = e.target
    this.setstate({
      textBoxValue: value,
      errorShowFlag: false
    })
  }

  addCity = () => {
    const { textBoxValue } = this.state

    this.setState(prevState => ({
      cityArray: [...prevState.cityArray, textBoxValue],
      textBoxValue: ''
    }))
  }

  removeCity = e => {
    const { cityArray } = this.state
    const { value } = e.target
    const newCityArray = cityArray.filter(city => city !== value)

    this.setState({ 
      cityArray: newCityArray
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { textBoxValue } = this.state

    if (textBoxValue === '') {
      this.setState({
        errorShowFlag: true
      })
    } else {
      this.addCity()
    }
  }

  render() {
    const {cityArray,textBoxValue, errorShowFlag} = this.state
    const showSite = cityArray.length !== 0
    

    return !showSite ? (
      <ErrorMessage errorMsg='Loading Data...' />
    ) : (
      <>
        <ul style={{ border: '2px dotted navy', padding: '20px'}}>
          {cityArray.map(city => (
            <li
              key={city}
              className='listItem'
              style={{ color: cityArray.length < 6 ? 'blue' : 'red' }}
              >
                {city}
                <Button2 value={city} onClick={this.removeCity}>X</Button2>
              </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
        <ControlledInputBox
            errorShowFlag={errorShowFlag}
            textBoxValue={textBoxValue}
            handleInputChange={this.handleInputChange}
            />
            <ButtonComponent />
            </form>
            </>
    )
  }


}

export default MyComponent