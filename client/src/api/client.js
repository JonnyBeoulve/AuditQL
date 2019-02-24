import ApolloClient from 'apollo-boost';

/* Connect to local GraphQL server. */
export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});