
import React from 'react';
import MyComponent from './Components/MyComponent/MyComponent';
import MyFunctionalComponent from './Components/MyFunctionalComponent/MyFunctionalComponent';
import ErrorMessage from './Components/ErrorMessage/ErrorMesage';

import './App.css';

function App() {
  const showSite = true

  if (showSite) {
    return (
      <div>
        <MyFunctionalComponent heading='Cities List' />
        <MyComponent />
      </div>
    )
  } else {
    return <ErrorMessage errorMsg='Site under maintenance' />
  }
}

export default App;