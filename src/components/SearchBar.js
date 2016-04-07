import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {searchTerm: ""}
  }

  // handleSubmit = (event) => {
  //   let apiKey = "e301b1792cb18509d3b3c843227991d2"
  //   let searchTerm = this.refs.keyword.value
  //   let numResults = 10
  //   let numPages = 1

  //   let flickrUrl = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=${numResults}&page=${numPages}&text=${searchTerm}`

  //   $.getJSON(flickrUrl, {
  //     api_key: apiKey,
  //     tags: searchTerm,
  //     per_page: numResults,
  //     page: numPages,
  //     // format: "json"
  //   }).success((data) => {
  //     this.setState({photos: data.photos.photo})
  //     console.log(flickrUrl)
  //       console.log(data)

  //   }).error((err) => {
  //       console.log(err)
  //     })

  //   event.preventDefault()

  // }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return(
      <div>
        <div className="form-group">
          <form onSubmit={this.handleSubmit} className="form-horizontal">
            <div className="col-lg-10">
              <input type="text"
                       value={this.state.value}
                       ref="keyword"
                       placeholder="Search for..."
                       onChange={this.handleChange}
                       className="form-control"
                 />
               <button type="submit" className="btn btn-primary">Search!</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

