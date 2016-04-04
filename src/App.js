import React, { Component, Children, cloneElement } from 'react'
import { Link } from 'react-router'
import MainPage from './components/MainPage'
import SearchBar from './components/SearchBar'

export default class App extends Component {

  render() {
    let children = Children.map(this.props.children, child => {
      return cloneElement(child, {
        ...child.props,
        ...this.props,
        ...this.state
      })
    })

    return (
      <div className="container">
        <h1>Welcome to flickr pickr!</h1>

        {children}
      </div>
    )
  }
}

// <p>Click <Link to='main'>here</Link> to for MainPage component</p>
