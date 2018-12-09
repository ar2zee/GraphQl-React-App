import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';

import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';
import CustomForm from "./form";

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
        
    }
    

     submitForm = async (e) => {
        e.preventDefault();
        if (this.state.authorId === '') {
          await this.setState({authorId: this.props.getAuthorsQuery.authors[0].id})
        }
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId,
            },
        refetchQueries: [{query: getBooksQuery}]
        });
    }

    displayAuthors = () => {
        var data = this.props.getAuthorsQuery; // because we have a name in the end of the file
        if(data.loading) return <option disabled>Loading Authors...</option>
        return data.authors.map(author => {
            return <option value={author.id} key={author.id}>{author.name}</option>
        })
    } 
   render() {

    return (
      <div>
        <CustomForm 
            onSubmit={this.submitForm}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
            authors={this.displayAuthors()}/>
      </div>
    )
  }
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"}),
)(AddBook);