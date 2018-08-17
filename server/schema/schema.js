const graphql = require('graphql');

const { graphQLObjectType, graphQLString } = graphql;

const BookType = new graphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: graphQLString},
        name: { type: graphQLString},
        genre: { type: graphQLString}
    })
});