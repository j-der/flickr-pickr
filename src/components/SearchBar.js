import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {Search: ""}
  }

  searchSubmit =  (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({Search: event.target.value})
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.value} placeholder="Search for..." onChange={this.handleChange} onSubmit={this.state.searchSubmit} />
      </div>
    )
  }
}

