import React from "react"
import ReactDOM from 'react-dom/client'
const x = React.createElement('p', {className:'x'}, 'Hello this is paragraph')

const y = React.createElement('h3', {className:'y'}, 'This is h3')

const allContainer = React.createElement('div', { className: 'container' }, [x, y])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(allContainer)