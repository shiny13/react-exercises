import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
        this.setState({ books });
    })
  }

  handleBookChange  = (event, book) => {
      const shelf = event.target.value

      if (this.state.books) {
        BooksAPI.update(book,shelf).then(() => {
          book.shelf = shelf;
          this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([ book ])
          }))
        })
      }
  }

  render() {
    return (
      <div className="app">
        { /* Main Page */ }
        <Route exact path="/" render={() => (
            <ListBooks books={this.state.books} handleBookChange={this.handleBookChange}/>
        )}/>

        { /* Search Page */ }
        <Route path="/search" render={( {history} ) => (
            <Search booksShelved={this.state.books} handleBookChange={this.handleBookChange} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
