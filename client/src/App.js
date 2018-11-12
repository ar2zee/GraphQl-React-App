import React, { Component } from 'react';

import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Test h1</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
