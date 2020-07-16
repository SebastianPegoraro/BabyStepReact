import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export class UpdateWhenNewProp extends Component {
    constructor() {
        super()
    
        this.state = {
             increasing: false
        }
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        this.setState({increasing:nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 4 === 0;
    }
    update(){
        ReactDOM.render(
            <UpdateWhenNewProp val={this.props.val+1} />,
            document.getElementById('root')
        )
    }
    render() {
        console.log(this.state.increasing)
        return (
            <div>
                <button onClick={this.update.bind(this)}>{this.props.val}</button>
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps: ${prevProps.val}`)
    }
}

UpdateWhenNewProp.defaultProps = {val: 0}

export default UpdateWhenNewProp
