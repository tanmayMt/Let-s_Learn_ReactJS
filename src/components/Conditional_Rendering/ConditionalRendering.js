import React, { Component } from 'react'
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';

export default class ConditionalRendering extends Component {
constructor(props) {
  super(props)

  this.state = {
    IsLoggedIn : false,
  }
}

  render() {
    const {IsLoggedIn} = this.state;
    if(IsLoggedIn){
        return <HomePage/>
    }
    else{
        return <SignUpPage/>
    }
  }
}