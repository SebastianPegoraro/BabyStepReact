import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class App extends Component {
    constructor(){
        super();
        this.state = {
            txt: 'state text',
            cat: 0
        }
    }
    update( e ){
        this.setState({txt: e.target.value})
    }
    render() {
        return (
            <div>
                <Widget update={this.update.bind(this)}></Widget>
                <input type="text" onChange={this.update.bind(this)} ></input>
                <h1>Testing Render</h1>
        <h3>{this.props.txt}</h3>
        <h3>{this.state.txt} - {this.state.cat}</h3>
            </div>
        )
    }
}
//Stateless function
const Widget = (props) => 
<input type="text" onChange={props.update} ></input>

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number
}

App.defaultProps = {
    txt: "This is default text"
}

export default App

