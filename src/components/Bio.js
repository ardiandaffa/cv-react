import React, { Component } from 'react'

class Bio extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="bio-container">
            <h3>PROFILE</h3>
            <p>{this.props.name}</p>
            <p>{this.props.job}</p>
            <p>{this.props.email}</p>
        </div>
        )
    }
}

export default Bio;