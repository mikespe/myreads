import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
// import Books from './Books'
import Searchpage from './Searchpage'
import Mainpage from './Mainpage'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        books: []
      }
      let self = this
    this.mainshelfchange = this.mainshelfchange.bind(this)
}


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  mainshelfchange(e) {
    let specificbook = e.currentTarget.className
    let newshelf = e.target.value
    let thisbook = e.target.parentNode

    BooksAPI.get(specificbook).then((newbook) => {
      let bookmatch = this.state.books.filter((book) => (
        book.id == specificbook
      ))
      if(bookmatch.length == 0) {
        let newstate = this.state.books.push(newbook)
        this.setState({ newstate })
      }
    })

    BooksAPI.update(specificbook, newshelf).then((e) => {
      this.setState((state) => {
        books: state.books.map((book) => {
          if(book.id == specificbook) {
            book.shelf = newshelf
            return book
          } else {
            return book
          }
        })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Mainpage
            changebook={this.mainshelfchange}
            books={this.state.books}
            />
        )}/>

      <Route path='/searchpage' render={() => (
        <Searchpage
          changebook={this.mainshelfchange}
          books={this.state.books}/>
      )}/>
      </div>
    )
  }
}

export default BooksApp
