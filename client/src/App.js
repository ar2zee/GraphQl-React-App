import React, { Component } from 'react';
import AppoloClient from 'apollo-boost';
import {AppoloProvider} from 'react-apollo';

import BookList from './components/BookList';

const client = AppoloClient({
  uri: "http://localhost:4000/graphql"
})

class App extends Component {
  render() {
    return (
      <AppoloProvider client={client}>
        <div id="main">
          <h1>Test h1</h1>
          <BookList />
        </div>
      </AppoloProvider>
    );
  }
}

export default App;
