import React, { Component, Children, cloneElement } from 'react'
import { Link } from 'react-router'
import SearchBar from './components/SearchBar'
import Results from './components/Results'

const API_KEY = "e301b1792cb18509d3b3c843227991d2"

export default class App extends Component {

constructor(props) {
  super(props)
  this.state = { photos: [] }
}

 handleSubmit = (event) => {

    console.log("here")

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
      // format: "json"
    }).success((data) => {
      this.setState({photos: data.photos.photo})
      console.log(flickrUrl)
        console.log(data)

    }).error((err) => {
        console.log(err)
      })

    event.preventDefault()

  }

  render() {
    let children = Children.map(this.props.children, child => {
      return cloneElement(child, {
        ...child.props,
        ...this.props,
        ...this.state,
        handleSubmit: this.handleSubmit
      })
    })

    return (
      <div className="container">
        <h1>Welcome to flickr pickr!</h1>
        <SearchBar />
        <Results photos={this.state.photos}/>
      </div>
    )
  }
}



// <p>Click <Link to='main'>here</Link> to for MainPage component</p>
