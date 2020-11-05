import React from 'react'
import ReactDOM from 'react-dom'
import Square from './components/Square.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            0: 'default'
        }
        this.click = this.click.bind(this)
        this.click1 = this.click1.bind(this)
        this.turn = 1

        this.mat = _.range(42, 0)
    }
    click(e) {
        if (this.turn === 1) {
            this.turn = 2
        } else {
            this.turn = 1
        }
    }
    click1(input1) {
        this.setState({
            [input1]: 'box' + this.turn
        })
    }

    render() {
        return (
            <div className="grid" onClick={this.click}>
                {/* <div className="c" id="1" onClick={this.click}>
                    <Square turn={this.turn} cs={this.state.cs1} y={1} />
                    <Square turn={this.turn} cs={this.state.cs1} y={2} />
                    <Square turn={this.turn} cs={this.state.cs1} y={3} />
                    <Square turn={this.turn} cs={this.state.cs1} y={4} />
                    <Square turn={this.turn} cs={this.state.cs1} y={5} />
                    <Square turn={this.turn} cs={this.state.cs1} y={6} />
                </div>
                <div className="c" id="2" onClick={this.click}>
                    <Square turn={this.turn} cs={this.state.cs2} y={1} />
                    <Square turn={this.turn} cs={this.state.cs2} y={2} />
                    <Square turn={this.turn} cs={this.state.cs2} y={3} />
                    <Square turn={this.turn} cs={this.state.cs2} y={4} />
                    <Square turn={this.turn} cs={this.state.cs2} y={5} />
                    <Square turn={this.turn} cs={this.state.cs2} y={6} />
                </div>
                <div className="c" id="3" onClick={this.click}>
                    <Square turn={this.turn} cs={this.state.cs3} y={1} />
                    <Square turn={this.turn} cs={this.state.cs3} y={2} />
                    <Square turn={this.turn} cs={this.state.cs3} y={3} />
                    <Square turn={this.turn} cs={this.state.cs3} y={4} />
                    <Square turn={this.turn} cs={this.state.cs3} y={5} />
                    <Square turn={this.turn} cs={this.state.cs3} y={6} />
                </div>
                <div className="c" id="4" onClick={this.click}>
                    <Square turn={this.turn} cs={this.state.cs4} y={1} />
                    <Square turn={this.turn} cs={this.state.cs4} y={2} />
                    <Square turn={this.turn} cs={this.state.cs4} y={3} />
                    <Square turn={this.turn} cs={this.state.cs4} y={4} />
                    <Square turn={this.turn} cs={this.state.cs4} y={5} />
                    <Square turn={this.turn} cs={this.state.cs4} y={6} />
                </div>
                <div className="c" id="5" onClick={this.click}>
                    <Square turn={this.turn} cs={this.state.cs5} y={1} />
                    <Square turn={this.turn} cs={this.state.cs5} y={2} />
                    <Square turn={this.turn} cs={this.state.cs5} y={3} />
                    <Square turn={this.turn} cs={this.state.cs5} y={4} />
                    <Square turn={this.turn} cs={this.state.cs5} y={5} />
                    <Square turn={this.turn} cs={this.state.cs5} y={6} />
                </div>
                <div className="c" id="6" onClick={this.click}>
                    <Square turn={this.turn} cs={this.state.cs6} y={1} />
                    <Square turn={this.turn} cs={this.state.cs6} y={2} />
                    <Square turn={this.turn} cs={this.state.cs6} y={3} />
                    <Square turn={this.turn} cs={this.state.cs6} y={4} />
                    <Square turn={this.turn} cs={this.state.cs6} y={5} />
                    <Square turn={this.turn} cs={this.state.cs6} y={6} />
                </div>
                <div className="c" id="7" onClick={this.click}>
                    <Square turn={this.turn} cs={this.state.cs7} y={1} />
                    <Square turn={this.turn} cs={this.state.cs7} y={2} />
                    <Square turn={this.turn} cs={this.state.cs7} y={3} />
                    <Square turn={this.turn} cs={this.state.cs7} y={4} />
                    <Square turn={this.turn} cs={this.state.cs7} y={5} />
                    <Square turn={this.turn} cs={this.state.cs7} y={6} />
                </div> */}
                {this.mat.map((elem, i) => <Square key={elem} key1={elem} state={this.state} click1={this.click1} turn={this.turn} />)}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))