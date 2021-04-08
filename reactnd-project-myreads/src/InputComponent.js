import React, { Component } from 'react';

class InputComponent extends Component {
  state = {
    value: '',
  };
  inputChanged = event => {
    const val = event.target.value;
    console.log('input', val)
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" value={this.state.value} onChange={this.inputChanged}
          placeholder="Type the book's title or author name" autoFocus
        />
      </div>
    );
  }
}

export default InputComponent;
