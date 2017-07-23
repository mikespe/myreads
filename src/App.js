import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
// import Books from './Books'
import Searchpage from './Searchpage'
import Mainpage from './Mainpage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        {console.log(this.state.books)}
        <Route exact path='/' render={() => (
          <Mainpage
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
