import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {searchTerm: "", sortBy: "desc"}
  }

 getValue = () => {
    return this.refs.keyword.value
 }

  render() {
    return(
      <div>
        <form onSubmit={event => this.props.handleSubmit(event, this.getValue())} className="form-horizontal">
          <div className="col-lg-6">
            <input type="text"
                   ref="keyword"
                   placeholder="Search for..."
                   className="form-control"/>
          </div>
          <div className="form-group">
              <button type="submit" className="btn btn-primary">Search!</button>
              <button type="reset" className="btn btn-default">Clear</button>

              <div className="col-lg-2">
                <select className="form-control"
                        id="select"
                        value={this.state.sortBy}
                        onChange={event => this.setState({sortBy: event.target.value})}>
                  <option value="desc">Newest first</option>
                  <option value="asc">Oldest first</option>
                </select>
              </div>
          </div>
        </form>
      </div>
    )
  }
}
