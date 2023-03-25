import React, { Component } from 'react'
import Hourglass from './loading.gif'

export class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Hourglass} alt="Loading" />
      </div>
    )
  }
}

export default Loading
