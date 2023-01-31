import {Component} from 'react'

import './App.css'

import Counter from './components/Counter'

import GetRequest from './components/GetRequest'

import PostRequest from './components/PostRequest'

class App extends Component  {

  state = {value : ""}

   CounterApp = () => {
      this.setState({value : "counter"})
  }

  GetApp = () => {
    this.setState({value : "get"})
  }

  RequestApp = () => {
    this.setState({value : "post"})
  }

  getComponents = () => {
    const {value} = this.state 
    switch(value) {
      case "counter" :
        return <Counter />
      case "get" :
        return <GetRequest />
      case "post" :
        return <PostRequest />
      default :
        return ""
    }
  }

  render() {
    return (
      <div className='app-container'>
        <h1 className='h' onClick={this.CounterApp}>Counter Application</h1>
        <h1 className='h' onClick={this.GetApp}>List of Items dispaly using Get Reuquest</h1>
        <h1 className='h' onClick={this.RequestApp}>POST Request Api</h1>
        <p>Note: Please click above which you want</p>
        {this.getComponents()}
      </div>
    )
  }
  
  }

export default App