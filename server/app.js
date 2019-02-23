const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// Bind GraphQL to our express server.
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Listen on port 4000.
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});