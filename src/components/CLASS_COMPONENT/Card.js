import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
        <h1>This is class Component</h1>
        <div>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
        </div>
      </div>
    )
  }
}
