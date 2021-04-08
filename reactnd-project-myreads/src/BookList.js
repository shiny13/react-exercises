import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BookList extends Component {
    render() {
      const { categories, books, moveBook } = this.props;
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>My book collections</h1>
          </div>
          <div className="list-books-content">
            <div>
              {categories.map(shelf => (
                <BookShelf key={shelf.key} shelf={shelf} books={books} moveBook={moveBook} />
              ))}
            </div>
          </div>
          <div className="open-search">
            <Link to="search">
              <button>Add a Book</button>
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default BookList;