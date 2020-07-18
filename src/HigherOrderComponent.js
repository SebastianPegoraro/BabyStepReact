import React, { Component } from 'react'

const HOC = (InnerComponent) => class extends React.Component{
    constructor() {
        super()
    
        this.state = {
             cont:0
        }
    }
    update(){
        this.setState({cont: this.state.cont + 2})
    }
    componentDidMount() {
        console.log('did mount')
    }
    render(){
        return (
        <InnerComponent {...this.props} {...this.state} update={this.update.bind(this)}/>
        )
    }
}


export class HigherOrderComponent extends Component {
    render() {
        return (
            <div>
                <Button>boton</Button>
                <hr/>
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.cont}</button>)

class Label extends Component {
    componentDidMount() {
        console.log('label did mount')
    }
    render() { 
    return ( <label onMouseMove={this.props.update}>{this.props.children} - {this.props.cont} </label> );
    }
}

const LabelHOC = HOC(Label)


export default HigherOrderComponent
