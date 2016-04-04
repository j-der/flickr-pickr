import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {Search: ""}
  }

  searchSubmit =  (event) => {
    event.preventDefault()
  }


  handleSearchChange = (event) => {
    this.setState({Search: event.target.value})
  }

  render() {
    return(
      <div>
        <input type="text" placeholder="Search for..." onChange={this.state.handleSearchChange} />
      </div>
    )
  }
}

