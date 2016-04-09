import React, { Component } from 'react'

export default class PhotoMoral extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: this.props.open || false }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {

    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" onTouchTap={this.props.handleClose} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              <p>One fine body…</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
