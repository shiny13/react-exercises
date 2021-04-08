import React from 'react';
import Book from './Book';

const ResultList = props => {
  const { searches, books, moveBook } = props;

  const searchedBooks = searches.map(book => {
    books.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ul className="books-grid">
        {searchedBooks.map(book => (
          <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : 'none'} moveBook={moveBook} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
