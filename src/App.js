import React from 'react';
import './App.css';

// Props-send data from parents to child components-data or functions-adding attr to our component elements
// Without props => <MyComponet />
// With Props = > <MyElement name='Aamir' myfunc={() => console.log('hello world)}/>
// pass data from outer to inner <> data or function


class MyComponent extends React.Component {
  render () {

    // Added this.props.cityArray instead of the array
    const cityArray = this.props.cityArray

    const shortListedCities = cityArray.filter(city => city.length > 6)

    return (
      <ul>
        {
          shortListedCities.map(city => <li key={city}>{city}</li>)
        }
      </ul>
    )
  }
}

function App () {
  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gwadar']


  return (
    <div>
    <MyComponent cityArray={cityArray1}/>
    <MyComponent cityArray={cityArray2}/>
    </div>
  )
}

export default App;