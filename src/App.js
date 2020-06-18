import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class App extends Component {
    constructor(){
        super();
        this.state = {
            txt: 'state text',
            cat: 0,
            currentEvent: '----'
        }
        this.update = this.update.bind(this)
    }
    update( e ){
        this.setState({
            txt: e.target.value,
            currentEvent: e.type  //React Synthetic Event System
        })
    }
    render() {
        return (
            <div>
                <Widget update={this.update.bind(this)}></Widget>
                <input type="text" onChange={this.update.bind(this)} ></input>
                <h1>Testing Render</h1>
                <h3>{this.props.txt}</h3>
                <h3>{this.state.txt} - {this.state.cat}</h3>

                <div>
                    <Button>I <Heart></Heart> Random</Button>
                </div>

                <div> 
                    <textarea 
                        onKeyPress={this.update}
                        onCopy={this.update}
                        onCut={this.update}
                        onPaste={this.update}
                        onFocus={this.update}
                        onBlur={this.update}
                        onDoubleClick={this.update}
                        cols="30" 
                        rows="10" 
                    />

                    <h1>{this.state.currentEvent}</h1>
                </div>
            </div>
        )
    }
}
//Stateless function
const Widget = (props) => <input type="text" onChange={props.update} ></input>

//Stateless function
const Button = (props) => <button>{props.children}</button>

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number
}

App.defaultProps = {
    txt: "This is default text"
}

class Heart extends Component{
    render(){
        return (
            <span>&hearts;</span>
        )
    }
}

export default App

