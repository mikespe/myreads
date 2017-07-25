import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Books from './Books'

class Mainpage extends Component {
render() {
  let crreading = this.props.books.filter((book) => (
    book.shelf == 'currentlyReading'
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
                      backgroundimg={book.imageLinks.thumbnail}
                      title={book.title}
                      author={book.authors[0]}
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
                book
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  book
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
