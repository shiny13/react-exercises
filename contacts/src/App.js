import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return <ol>
        { people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
  }
}

/*function App() {
  return (
    <div className="App">
        <ContactList contacts={[
          { name: 'Tyler' },
          { name: 'Karen' },
          { name: 'Richard' }
        ]}/>
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Mckenzie' },
          { name: 'Ryan' }
        ]}/>
      </div>
  );
}*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Tyler' },
          { name: 'Karen' },
          { name: 'Richard' }
        ]}/>
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Mckenzie' },
          { name: 'Ryan' }
        ]}/>
      </div>
    );
  }
}

export default App;
