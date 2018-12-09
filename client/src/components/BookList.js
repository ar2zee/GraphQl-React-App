import React, { Component } from 'react';
import {graphql} from 'react-apollo';

import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  
  state = {
      selectedBook: null
    }

  displayBooks() {
    var data = this.props.data;

    if(data.loading) {
      return (
        <div>
          Loading Books...
        </div>
      )
    } else {
      return data.books.map(book => {
        return (
          <li onClick={(e) => this.setState({selectedBook: book.id})} key={book.id}>{book.name}</li>  
        )
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
            { this.displayBooks() }
        </ul>
        <BookDetails bookId={this.state.selectedBook}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
