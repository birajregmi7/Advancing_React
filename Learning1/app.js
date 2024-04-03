const heading1 = React.createElement("h4", {}, "Heading1")
const heading2 = React.createElement('h6', {}, "Heading2")
const divContainer = React.createElement('div', {id:"container"}, [heading1,heading2])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(divContainer)