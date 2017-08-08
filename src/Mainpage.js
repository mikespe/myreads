import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Books from './Books'
import PropTypes from 'prop-types'


class Mainpage extends Component {
  static propTypes = {
    changebook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }
render() {
  let crreading = this.props.books.filter((book) => (
    book.shelf == 'currentlyReading'
  ))
  let wtreading = this.props.books.filter((book) => (
    book.shelf == 'wantToRead'
  ))
  let read = this.props.books.filter((book) => (
    book.shelf == 'read'
  ))
  return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {crreading.map((book) => (
                    <li key={book.id}>
                    <Books
                      changebook={this.props.changebook}
                      backgroundimg={book.imageLinks.thumbnail}
                      title={book.title}
                      author={book.authors}
                      id={book.id}
                      shelf={book.shelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wtreading.map((book) => (
                    <li key={book.id}>
                    <Books
                      changebook={this.props.changebook}
                      backgroundimg={book.imageLinks.thumbnail}
                      title={book.title}
                      author={book.authors}
                      id={book.id}
                      shelf={book.shelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((book) => (
                    <li key={book.id}>
                    <Books
                      changebook={this.props.changebook}
                      backgroundimg={book.imageLinks.thumbnail}
                      title={book.title}
                      author={book.authors}
                      id={book.id}
                      shelf={book.shelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/searchpage'
            >Add a book</Link>
        </div>
      </div>
  )
}
}

export default Mainpage
