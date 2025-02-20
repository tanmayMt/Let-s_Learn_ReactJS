import React, { Component } from 'react'

export default class EventHandlingClass extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        searchValue : ''
    }
  }
  handleSignUpClick = ()=>{
    console.log("Button is clicked");
  }
  
  handleOnChange = (e) =>{
    this.setState({
        searchValue : e.target.value
    })
    console.log(this.state.searchValue)
  }
  render() {
    return (
            <div>
                <input type="text" value={this.state.searchValue} onChange={this.handleOnChange}/><br/>
                <button onClick={this.handleSignUpClick}>Sign Up</button>
                <p>{this.state.searchValue}</p>
            </div>
    )
  }
}
