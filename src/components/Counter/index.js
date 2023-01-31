import {Component} from 'react'

import './index.css'

class Counter extends Component {

  state =  {count: 0}

  incrementButton = () => {
    this.setState(prevState => ({count: prevState.count + 3}))
    console.log("clicked")
  }

  decrementButton = () => {
    console.log("Decrement")
    this.setState(prevState => ({count: prevState.count - 3}))
  }

  render() {
    const {count} = this.state
    return (
      <div className='bg-container'>
        <h1 className='head-count'>Counter</h1>
        <div className='card-1-count'>
          <button onClick={this.decrementButton} className="button-1-count">-</button>
          <h1 className='counter'>{count}</h1>
          <button onClick={this.incrementButton} className="button-2-count">+</button>
        </div>
      </div>
    )
  }
}

export default Counter;
