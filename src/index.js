import React, { Component }  from 'react'
import ReactDOM from 'react-dom'

import Auxiliar from './components/upper'

class Welcome extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.state = {
            name: 'Medium'
        }
    }

    handleChange(e) {

        this.setState({
            name: e.target.value
        })
    } 

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome</h1>
                <p>Hello { this.state.name }</p>
                <input onChange={this.handleChange} defaultValue={ this.state.name } />
                <Auxiliar />
            </div>
        )
    }
}

ReactDOM.render(<Welcome />, document.getElementById('app'))