import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {Search: ""}
  }

  searchSubmit = (event) => {
    let apiKey = "e301b1792cb18509d3b3c843227991d2"
    let searchTerm = this.refs.keyword.value

    let flickrUrl = "https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=10&page=1&text=${searchTerm}"

    console.log("button clicked, yo")
    event.preventDefault()

  }

  handleChange = (event) => {
    this.setState({Search: event.target.value})
  }

  render() {
    return(
      <div>
      <form onSubmit={this.searchSubmit}>
        <input type="text"
               value={this.state.value}
               ref="keyword"
               placeholder="Search for..."
               onChange={this.handleChange}
         />
         <input type="submit" value="Search!" />
      </form>
      </div>
    )
  }
}

