import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import Books from './Books'


class Searchpage extends Component {
  state = {
    search: '',
    searchbooks: []
  }

  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  searchsubmit = (e) => {
    e.preventDefault()
    const searchvalue = e.target.query.value
    const maxResults = 5
    BooksAPI.search(searchvalue, maxResults).then((data => {
      this.setState({ searchbooks: data })
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <form
              onSubmit={this.searchsubmit}
              >
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search}
              onChange={(e) => this.handleChange(e)}
              name='query'
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchbooks.map((book) => (
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
      )
    }
  }

  export default Searchpage
