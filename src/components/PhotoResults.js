import React, { Component } from 'react'
import PhotoResultsItem from './PhotoResultsItem'

export default class PhotoResults extends Component {

  constructor(props) {
    super(props)
    this.state = { mounted: false }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {

    return (
      <div>
      Results will go here
      </div>
      )
  }
}
