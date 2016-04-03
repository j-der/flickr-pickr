import React, { Component, Children, cloneElement } from 'react'
import MainPage from './components/MainPage'

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
        {children}
      </div>
    )
  }
}

