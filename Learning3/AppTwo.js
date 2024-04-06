import React from 'react'
import ReactDOM from 'react-dom'

//* What is functional component? 
//* It's Just a normal function like in JS where it renders JSX
//* Component is always written on Capital letters


const tryingNew = <h1>Hello World</h1>  // This is react element 
const tryingMoreNew = (
    <div>
        <h1>This is h1</h1>
        <h3>This is h3</h3>
    </div>
)
const OurFunComponent = () => {
    return (
        <div>
            <h5>We are using Functional Component</h5>
            <h3>We are testing</h3>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))
// const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root.render(<OurFunComponent />)

