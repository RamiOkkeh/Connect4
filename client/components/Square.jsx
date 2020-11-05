import React from 'react'

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            0: 'default'
        }
        this.click = this.click.bind(this)
    }
    click() {
        var key = this.props.key1 % 7
        var recurtion = () => {
            if (this.props.state[key]) {
                key += 7
                recurtion()
            }
        }
        console.log(key)
        recurtion()
        this.props.click1(key)
    }
    render() {
        return (
            <div className="box" onClick={this.click}>
                <div className={this.props.state[this.props.key1] ? this.props.state[this.props.key1] : 'box'}></div>
            </div>
        )
    }
}

export default Square;