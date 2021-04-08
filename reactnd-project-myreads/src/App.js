import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList';
import SearchItems from './SearchItems'

const categories = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksApp extends Component {
  state = {
    books: [],
    searches: [],
    error: ''
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books: books });
      })
      .catch(err => {
        this.setState({ error: String(err) });
      })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .catch(err => {
        this.setState({ error: String(err) });
      });
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };
  
  bookSearchQuery = (text) => {
    if (text !== '') {
      BooksAPI.search(text)
        .then(books => {
          // Checking for errors from the API first
          if (books.error !== '') {
            this.setState({ searches: [] });
          } else { 
            this.setState({ searches: books });
          }
        });
    } else {
      this.setState({ searches: [] });
    }
  };
  clearSearch = () => {
    this.setState({ searches: [] });
  };

  render() {
    const { books, searches, error } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookList
              categories={categories}
              books={books}
              moveBook={this.moveBook}
            />
          )}
        />
        <Route path="/search" render={() => (
            <SearchItems
              searches={searches}
              books={books}
              onSearch={this.bookSearchQuery}
              moveBook={this.moveBook}
              clearSearch={this.clearSearch}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
