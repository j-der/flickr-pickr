import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {searchTerm: ""}
  }

 getValue = () => {
    return this.refs.keyword.value
 }

  render() {
    return(
      <div className="form-group">
        <form onSubmit={event => this.props.handleSubmit(event, this.getValue())} className="form-horizontal">
          <div className="col-lg-10">
            <input type="text"
                     ref="keyword"
                     placeholder="Search for..."
                     className="form-control"
               />
             <button type="submit" className="btn btn-primary">Search!</button>
          </div>
        </form>
      </div>
    )
  }
}
