const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

// Connect Mongoose to MLAB using a public account.
mongoose.connect('mongodb://auditql-admin:publicPassword123@ds149365.mlab.com:49365/audit-ql', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('Connected to MLAB database.');
});

// Bind GraphQL to our express server.
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Listen on port 4000.
app.listen(4000, () => {
    console.log('AuditQL server now listening on port 4000.');
});