import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Books extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    changebook: PropTypes.func,
    title: PropTypes.string.isRequired,
    author: PropTypes.any,
    backgroundimg: PropTypes.string.isRequired,
    shelf: PropTypes.string
  }
  render() {
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${this.props.backgroundimg})` }}></div>
            <div className="book-shelf-changer">
              <form className={this.props.id} onChange={(e) => this.props.changebook(e)}>
              <select defaultValue={this.props.shelf || 'none'}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
              </form>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
    )
}
}

export default Books
