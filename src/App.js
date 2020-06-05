import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Testing Render</h1>
        <h3>{this.props.txt}</h3>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number
}

App.defaultProps = {
    txt: "This is default text"
}

export default App

