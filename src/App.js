import logo from './logo.svg';
import './App.css';




// Simple JS Fn


function getTwitterProfile (user) {
  return 'https://twitter.com/' + username
}

// it's a very simple function

//Another smpl fn

function getTwotterUserDP (username) {
  return 'https://avatars.io/twitter/' + username + '/medium'
}

// Compositional Model:

function getTwitterProfileData (username) {
  return {
    twitterProfile: getTwitterProfile(username),
    profilePic: getTwitterUserDP(username)
  }
}

// That is compositional

// React and Composition

// Three different components 

<LandingPage />
<AboutUs />
<ContactUs />

// Currently they are three different components, however, they can be made 
// one parent component enclosing two child comps as follows:-

<LandingPage>
  <AboutUs />
  <ContactUs />
</LandingPage>

// This way we can build a big website using individual component blocks


// React has a declarative nature

//e.g, water tank level-manual is imperative while automatic is declarative

// Imperative Code!

const teachers = ['Zia', 'Irfan', 'Muneeb', 'Aamir']
const titles = []

for (let i =0; i < teachers.length; i++) {
  titles[i] = 'Mr. ' + teachers[i]
}

console.log(titles)


// Declarative Code

const teachers = ['Zia', 'Irfan', 'Muneeb', 'AAmir']
const titles = teachers.map(name => 'Mr. ' + name)
console.log(titles)

//Unidirectional Data Binding also known as single source of truth only propagates
// changes from the model to the Ui not vice versa.

// React is simply javascript. 

// DOM vs VIrtualDOM

// DOM is document object model, a programming interface for HTML & XML documents
// Created when a web page is loaded. 
// An object oriented manifestation of the web page

// VirtualDOM

// Introduced by React (VDOM)- a programming concept whereby a virtual representation 
// of a UI is kept in memory
// A tree based on JS objects created by React resembling a DOM tree
// React synchronizes Real DOM with VDOM through Reconciliation process.
// React uses ReactDOM lib updates VDOM renders same on DOM

////JSX


// JSX stands for JS XML. HTML renders web content. .html writes HTML tags.
// React => JS => .js files
// JSX => HTML tags => .js files
// JSX makes it easier to write and add HTML in React.

// Example JSX

// In HTML we write

<div> Hello World! </div>

// In React the above becomes

React.createElement('div', null, 'Hello World!');

// In HTML we write

<div> 
  <h1>Hello World! </h1>
  </div>

// In React the above becomes

React.createElement('div', null, React.createElement( 'h1',null, 'Hello World!'));

// For nested tags, react 

// HTML

<div>
  <h1>Some title</h1>
  <div>Some content</div>
</div>

//In React, the h1 and div tags will need to have a parent, !Important

var myElement = (
  <div>
    <h1>Some title</h1>
    <div>Some content</div>
  </div>
)
ReactDOM.render(<my Element />, document.getElementById('root'));

// We can also use React.Fragment

var myElement = (
  <React.Fragment>
    <h1>Some title</h1>
    <div>Some content</div>
  </React.Fragment>
)
ReactDOM.render(<my Element />, document.getElementById('root'));

// Global Installation

npm install create-react-app -g

// Scaffold React App

npx-create-react-app my-app

cd my-app

npm start or yarn start




export default App;
