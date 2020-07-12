import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'


export class LifeCicle extends PureComponent {
    constructor(){
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({ val: this.state.val + 1})
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.update}>{this.state.val}</button>
            </div>
        )
    }
}

class Wrapper extends PureComponent {
    mount(){
        ReactDOM.render(<LifeCicle />, document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id='a'></div>            
            </div>
        )
    }
}


export default Wrapper

