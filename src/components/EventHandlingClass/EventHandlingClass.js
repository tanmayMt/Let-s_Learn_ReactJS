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
    console.log(e.target.value)
  }
  render() {
    return (
            <div>
                <input type="text" value={this.searchValue} onChange={this.handleOnChange}/><br/>
                <button onClick={this.handleSignUpClick}>Sign Up</button>
                <p></p>
            </div>
    )
  }
}
