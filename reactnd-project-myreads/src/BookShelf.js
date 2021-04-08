import React from 'react';
import Book from './Book';

const BookShelf = props => {
  const { shelf, books, moveBook } = props;
  const currentShelfCollection = books.filter(book => book.shelf === shelf.key);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          {currentShelfCollection.map(book => (
            <Book key={book.id} book={book} shelf={shelf.key} moveBook={moveBook} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookShelf;