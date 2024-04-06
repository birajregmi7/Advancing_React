// We learn
// JSX, Bable, scripts, Functional component, How to create run code in react without using React.createElement
import React from 'react'
import ReactDOM from 'react-dom/client'

//* We used to use React.createElement but now we are using somthing that looks like HTML in JS. 
//* But is it HTML? -> No it's not HTML but HTML lookalike
//* It's JSX. JSX came because main goal of React is to create HTML and CSS from JS so by using React.createElement it is difficult.
//* In React.createElement => object => HTML => DOM. HTML will be injected to DOM
//* IN JSX                 => React.createElement => object => HTML => DOM. Indirectly JSX is converting through React.createElement in the background

const tryingNew = <h1>Hello World</h1> 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(tryingNew)

// hello