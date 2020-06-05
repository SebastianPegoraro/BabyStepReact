import React, { Component } from 'react'

//Class component can hold states
export class App extends Component {
    render() {
        return React.createElement('h1', null, 'Clase App')
    }
}

//Stateless function
// const App = () => <h1>Stateless</h1>

export default App
