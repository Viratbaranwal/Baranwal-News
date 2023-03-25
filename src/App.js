import './App.css';
import Navbar from './Components/Navbar';

import React, { Component } from 'react'
import NewsComponent from './Components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <>
       <Navbar/>
       <NewsComponent/>
      </>
    )
  }
}

