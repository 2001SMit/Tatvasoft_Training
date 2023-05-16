import React, { Component } from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'
import Message from '../components/Message'
import UserGreeting from '../components/UserGreeting'
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import EventBind from '../components/EventBind'
import About from '../components/About'



class Home extends Component {
  
  
  
  // constructor() {
  //   super()
  //   this.state ={
  //       title: 'Welcome People !!',
  //       dis: 'This is description !'
  //   }
  // }
  render() {
    
    
  return (
    <div>
        <UserGreeting/>      
        {/* <Title name="SMIT" department="IT"/> */}
        {/* <h1>{this.state.title}</h1>
        <h3>{this.state.dis}</h3> */}
        <Title title='Welcome To Home Page' dis="BASIC HOME PAGE" />
        <Title title="Description" dis="To create a website using React, you will need to have a basic understanding of HTML, CSS, and JavaScript. React is a JavaScript library that allows you to build user interfaces using components."/>
        <Counter/>
        <Message/>
        <Title title='' dis="Any Questions??" />
        {/* <EventBind/> */}
    </div>
  );
}
}




export default Home