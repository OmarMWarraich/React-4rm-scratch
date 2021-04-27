import React from 'react';
import './App.css';
import PropType from 'prop-types';

//Best to use static library when initializing props


class MyComponent extends React.Component {
  static propTypes = {
    cityArray: PropType.array.isRequired
  }
  
  
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


  


function App() {
  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gwadar']


  // const myFunction = () => alert('Hello World')

  return (
    <div>
    
    <MyComponent cityArray={cityArray1}/>
    <MyComponent cityArray={cityArray2}/>
    </div>
  )
}

export default App;

