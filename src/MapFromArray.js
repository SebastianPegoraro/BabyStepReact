import React, { Component } from 'react'

export class MapFromArray extends Component {
    constructor() {
        super()
    
        this.state = {
             item:[]
        }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        fetch('https://swapi.dev/api/people/?format=json')
        .then(response => response.json())
        .then(({results: item}) => this.setState({item}))
    }
    filter(event){
        this.setState({filter: event.target.value})
    }
    render() {
        let item =this.state.item
        if (this.state.filter) {
            item = item.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
        return (
            <div>
                <input type='text' onChange={this.filter.bind(this)}></input>
                {item.map(item => <h4 key={item.name}>{item.name}</h4>)}
                {item.map(item => <Persona key={item.name} persona = {item}/>)}
            </div>
        )
    }
}

const Persona = (props) => <h4>{props.persona.name}</h4>



export default MapFromArray
