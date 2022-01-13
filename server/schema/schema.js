const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: graphQLString },
        genres: { type: GraphQLString }

    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args:{id: {type: GraphQLString}}
        }
    }
})