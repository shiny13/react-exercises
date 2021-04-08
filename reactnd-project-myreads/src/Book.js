import React, { Component }  from 'react';
import BookSwapper from './BookSwapper';

class Book extends Component {
    render() {
        const { book, shelf, moveBook } = this.props;
        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        maxWidth: 130,
                        maxHeight: 200,
                        backgroundImage: 
                        `url(${
                            book.imageLinks
                                ? book.imageLinks.thumbnail
                                : 'sample_book.png'
                        })`
                    }}
                    />
                    <BookSwapper book={book} shelf={shelf} moveBook={moveBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors ? book.authors.join(', ') : 'John Doe'}
                </div>
                </div>
            </li>
        );
    }
}

export default Book;