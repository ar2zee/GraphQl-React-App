import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

import CustomForm from "./form";

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

class AddBook extends Component {
    displayAuthors() {
        var data = this.props.data;
        if(data.loading) return <option disabled>Loading Authors...</option>
        return data.authors.map(author => {
            return <option value={author.id} key={author.id}>{author.name}</option>
        })
    } 
   render() {
    return (
      <div>
        <CustomForm authors={this.displayAuthors()}/>
        
      </div>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook);