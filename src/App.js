import React, { Component, Children, cloneElement } from 'react'
import { Link } from 'react-router'
import SearchBar from './components/SearchBar'
import PhotoResults from './components/PhotoResults'

const API_KEY = "e301b1792cb18509d3b3c843227991d2"

export default class App extends Component {

constructor(props) {
  super(props)
  this.state = { photos: [] }
}

handleGetPhotos(photos) {
  this.setState({ photos }) //same as ({ photos: photos })
}

 handleSubmit = (event, term) => {
  event.preventDefault()

  let searchTerm = term
  let numResults = 10
  let numPages = 1
  let flickrUrl = `https://api.flickr.com/services/rest/?api_key=${API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=${numResults}&page=${numPages}&text=${searchTerm}`

  fetch(flickrUrl)
    .then(response => response.json())
    .then(data => {
      let photoArray = data.photos.photo
      this.handleGetPhotos(photoArray)
      })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to flickr pickr!</h1>
        <SearchBar handleSubmit={this.handleSubmit} />
        <PhotoResults data={this.state.photos} />
      </div>
    )
  }
}
