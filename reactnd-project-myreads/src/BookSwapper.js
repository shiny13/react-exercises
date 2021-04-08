import React, { Component } from 'react';

class BookSwapper extends Component {
    state = {
      value: this.props.value
    };
    changeShelfStatus = (event) => {
      const { value } = event.target;
      this.setState({ value: value });
      this.props.moveBook(this.props.book, value);
    };
    render() {
      return (
        <div className="book-shelf-changer">
          <select value={this.state.value} onChange={this.changeShelfStatus}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      );
    }
  }

export default BookSwapper;