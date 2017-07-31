import React, { Component } from 'react';

class Books extends Component {
  render() {
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${this.props.backgroundimg})` }}></div>
            <div className="book-shelf-changer">
              <form onChange={(e) => this.props.changebook(e)}>
              <select>
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
