import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
// import Books from './Books'
import Searchpage from './Searchpage'
import Mainpage from './Mainpage'

class BooksApp extends React.Component {
  state = {
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
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
