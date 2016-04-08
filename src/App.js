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

 handleSubmit = (event, term) => {
  let apiKey = "e301b1792cb18509d3b3c843227991d2"
  let searchTerm = term
  let numResults = 10
  let numPages = 1
  let flickrUrl = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=${numResults}&page=${numPages}&text=${searchTerm}`

  fetch(flickrUrl)
    .then(res => res.json())
    .then(data => {
      let photoArray = data["photos"]["photo"]

        for (var i = 0; i < photoArray.length; i++) {
          let id = photoArray[i]["id"]
          let secret = photoArray[i]["secret"]
          let serverId = photoArray[i]["server"]
          let farmId = photoArray[i]["farm"]

          let imgSrc = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`
          console.log(imgSrc)
        }
      })

    event.preventDefault()

  }

  render() {
    // let children = Children.map(this.props.children, child => {
    //   return cloneElement(child, {
    //     ...child.props,
    //     ...this.props,
    //     ...this.state,
    //     handleSubmit: this.handleSubmit
    //   })
    // })

    return (
      <div className="container">
        <h1>Welcome to flickr pickr!</h1>
        <SearchBar handleSubmit={this.handleSubmit} />
        <PhotoResults photos={this.state.photos} />
      </div>
    )
  }
}



// <p>Click <Link to='main'>here</Link> to for MainPage component</p>
