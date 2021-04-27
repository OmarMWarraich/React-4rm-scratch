import React from 'react';
import './App.css';
import PropType from 'prop-types';

//PropType Example

//React components are meant to be reused
// Passing wrong prop type => throws error



class MyComponent extends React.Component {
  render () {

    
    const cityArray = this.props.cityArray

    const shortListedCities = cityArray.filter(city => city.length > 6)

    // this.props.myFunction()

    return (
      <ul>
        {
          shortListedCities.map(city => <li key={city}>{city}</li>)
        }
      </ul>
    )
  }
}

MyComponent.propTypes = {
  cityArray: PropType.array.isRequired
}

function App() {
  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gwadar']


  const myFunction = () => alert('Hello World')

  return (
    <div>
    
    <MyComponent cityArray={cityArray1} myFunction={myFunction}/>
    <MyComponent cityArray={cityArray2} myFunction={myFunction}/>
    </div>
  )
}

export default App;

