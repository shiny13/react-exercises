import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'
import Header from './Header'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        handleBookChange: PropTypes.func.isRequired
    }

    render() {
        const { books, handleBookChange } = this.props
        return (
            <div className="list-books">
                <Header appTitle="MyReads"/>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" handleBookChange={handleBookChange} books={books.filter(book => book.shelf === 'currentlyReading')}/>
                        <BookShelf title="Want To Read" handleBookChange={handleBookChange} books={books.filter(book => book.shelf === 'wantToRead')}/>
                        <BookShelf title="Read" handleBookChange={handleBookChange} books={books.filter(book => book.shelf === 'read')}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="add-contact"
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks