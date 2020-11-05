import React from 'react'

class Square extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div id="de" className={this.props.y <= this.props.cs1 ? 'colorBox' : 'box'}>
            </div>
        )
    }
}

export default Square;