import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class MainPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        This is the MainPage component
        <SearchBar />

      </div>
    )
  }
}

