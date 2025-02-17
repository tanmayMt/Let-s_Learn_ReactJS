import React, { Component } from 'react'
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';

export default class ConditionalRendering extends Component {
constructor(props) {
  super(props)

  this.state = {
    IsLoggedIn : true,
  }
}

  render() {
    const {IsLoggedIn} = this.state;
    let element;
    //// conditional rending based on if-else
    // if(IsLoggedIn){
    //     return <HomePage/>
    // }
    // else{
    //     return <SignUpPage/>
    // }
    if(IsLoggedIn){
        element=<HomePage/>
    }
    else{
        element=<SignUpPage/>
    }
    return element;
  }
}