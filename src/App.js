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

handleGetPhotos = (photos) => {
  this.setState({ photos }) //same as ({ photos: photos })
}

handleClear = () => {
  if (this.state !== null) {
    this.setState({ photos: [] })
  }
}

 handleSubmit = (event, term) => {
  event.preventDefault()

  let searchTerm = term
  let numResults = 12
  let numPages = 1
  let sortDefault = "date-posted-desc"
  let flickrUrl = `https://api.flickr.com/services/rest/?api_key=${API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=${numResults}&page=${numPages}&tags=${searchTerm}&sort=${sortDefault}`

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
      <div className="well bs-component">
        <h1>Welcome to flickr pickr!</h1>
        <p>A little app to look up recent photos from Flickr! No log in required. Simply enter a search term and view the photos.</p>
        <SearchBar handleSubmit={this.handleSubmit} />
      </div>
        <PhotoResults data={this.state.photos} />
      </div>
    )
  }
}
