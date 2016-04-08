import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {searchTerm: ""}
  }

  handleChange = (searchTerm) => {
    this.setState({searchTerm})
  }

  render() {
    return(
      <div>
        <div className="form-group">
          <form onSubmit={event => this.props.handleSubmit(event, this.state.searchTerm)} className="form-horizontal">
            <div className="col-lg-10">
              <input type="text"
                       value={this.state.searchTerm}
                       ref="keyword"
                       placeholder="Search for..."
                       onChange={event => this.handleChange(event.target.value)}
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

