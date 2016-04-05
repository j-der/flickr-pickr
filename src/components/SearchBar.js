import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {Search: ""}
  }

  searchSubmit = (event) => {
    let apiKey = "e301b1792cb18509d3b3c843227991d2"
    let searchTerm = this.refs.keyword.value
    let numResults = 10
    let numPages = 1

    let flickrUrl = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=${numResults}&page=${numPages}&text=${searchTerm}`

    $.getJSON(flickrUrl, {
      api_key: apiKey,
      tags: searchTerm,
      per_page: numResults,
      page: numPages,
      format: "json"
    }).success((data)=> {
      console.log(data)}).error((err) => {
        console.log(err)
      })


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

