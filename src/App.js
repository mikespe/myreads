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
    BooksAPI.update(specificbook, newshelf).then((e) => {
      this.setState((state) => {
        books: state.books.map((book) => {
          if(book.id == specificbook) {
            book.shelf = newshelf
            console.log('success')
            return book
          } else {
            return book
          }
        })
      })
    })
    return newshelf
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
        <Searchpage/>
      )}/>
      </div>
    )
  }
}

export default BooksApp
