const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//dummy data
const books = [
    {name: 'Harry Potter 1', genre: 'Fantasy', id: '1'},
    {name: 'Harry Potter 2', genre: 'Novel', id: '2'},
    {name: 'Harry Potter 3', genre: 'Comedy', id: '3'}
]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // code to get data from db
               return  _.find(books, {id: args.id});
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})