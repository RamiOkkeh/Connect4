import React from 'react'
import ReactDOM from 'react-dom'
import Square from './components/Square.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class: 'box',
            cs1: 0,
            cs2: 0,
            cs3: 0,
            cs4: 0,
            cs5: 0,
            cs6: 0,
            cs7: 0
        }
    }
    click(e) {
        console.log(e.target.parentElement, 'hello')
        var num = 'cs' + e.target.value
        console.log(num)
        this.setState({

        })
    }

    render() {
        return (
            <div className="grid">
                <div className="c" id="1" onClick={this.click}>
                    <Square currentState={this.state.cs1} y={1} />
                    <Square currentState={this.state.cs1} y={2} />
                    <Square currentState={this.state.cs1} y={3} />
                    <Square currentState={this.state.cs1} y={4} />
                    <Square currentState={this.state.cs1} y={5} />
                    <Square currentState={this.state.cs1} y={6} />
                </div>
                <div className="c" id="2" onClick={this.click}>
                    <Square currentState={this.state.cs2} y={1} />
                    <Square currentState={this.state.cs2} y={2} />
                    <Square currentState={this.state.cs2} y={3} />
                    <Square currentState={this.state.cs2} y={4} />
                    <Square currentState={this.state.cs2} y={5} />
                    <Square currentState={this.state.cs2} y={6} />
                </div>
                <div className="c" id="3" onClick={this.click}>
                    <Square currentState={this.state.cs3} y={1} />
                    <Square currentState={this.state.cs3} y={2} />
                    <Square currentState={this.state.cs3} y={3} />
                    <Square currentState={this.state.cs3} y={4} />
                    <Square currentState={this.state.cs3} y={5} />
                    <Square currentState={this.state.cs3} y={6} />
                </div>
                <div className="c" id="4" onClick={this.click}>
                    <Square currentState={this.state.cs4} y={1} />
                    <Square currentState={this.state.cs4} y={2} />
                    <Square currentState={this.state.cs4} y={3} />
                    <Square currentState={this.state.cs4} y={4} />
                    <Square currentState={this.state.cs4} y={5} />
                    <Square currentState={this.state.cs4} y={6} />
                </div>
                <div className="c" id="5" onClick={this.click}>
                    <Square currentState={this.state.cs5} y={1} />
                    <Square currentState={this.state.cs5} y={2} />
                    <Square currentState={this.state.cs5} y={3} />
                    <Square currentState={this.state.cs5} y={4} />
                    <Square currentState={this.state.cs5} y={5} />
                    <Square currentState={this.state.cs5} y={6} />
                </div>
                <div className="c" id="6" onClick={this.click}>
                    <Square currentState={this.state.cs6} y={1} />
                    <Square currentState={this.state.cs6} y={2} />
                    <Square currentState={this.state.cs6} y={3} />
                    <Square currentState={this.state.cs6} y={4} />
                    <Square currentState={this.state.cs6} y={5} />
                    <Square currentState={this.state.cs6} y={6} />
                </div>
                <div className="c" id="7" onClick={this.click}>
                    <Square currentState={this.state.cs7} y={1} />
                    <Square currentState={this.state.cs7} y={2} />
                    <Square currentState={this.state.cs7} y={3} />
                    <Square currentState={this.state.cs7} y={4} />
                    <Square currentState={this.state.cs7} y={5} />
                    <Square currentState={this.state.cs7} y={6} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))