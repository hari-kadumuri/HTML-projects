import React, { Component } from 'react';

class Welcome extends Component {
    render() {
    return <h1>Welcome {this.props.name}! You are {this.props.supeName}</h1>
    }
}

export default Welcome;