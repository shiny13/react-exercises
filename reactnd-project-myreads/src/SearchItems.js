import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ResultList from './ResultList';
import InputComponent from './InputComponent';

class SearchItems extends Component {
  render() {
    const { searches, books, onSearch, moveBook, clearSearch } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={clearSearch}>
              Back
            </button>
          </Link>
          <InputComponent onSearch={onSearch} />
        </div>
        <ResultList searches={searches} books={books} moveBook={moveBook} />
      </div>
    );
  }
}

export default SearchItems;
