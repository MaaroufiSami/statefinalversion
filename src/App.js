import './App.css';
import React, { Component } from 'react'

import ListCa from './Components/ListCa';


export default class App extends Component {
  state = {
   Personne: {
   fullName:"Maaroufi Sami",
   bio :"Hi ",
   imgSrc:"",
  profession:"student"},
  shows:false,
  time:0
  
  }
componentDidMount(){
  setInterval(()=>{
this.setState({time:this.state.time+1})
  },1000)
}
  Change = () => {
    this.setState({
      shows: !this.state.shows,
      time:0
    })
  }
  
  render() {
    return (
      <div style={{display:"flex",flexDirection:"column", margin:"0px 500px", }}>
     <button className='btn' onClick={this.Change} style={{margin:"40px"}}>{this.state.shows?"Disspear":"Appear"}</button>
     {this.state.shows &&<ListCa Personne={this.state.Personne}/>}
     <p>{this.state.shows&&this.state.time}</p>
      </div>
    )
  }
}