const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');

const app = express();

// Connect Mongoose to MLAB.
mongoose.connect('mongodb://audit:test@ds161248.mlab.com:61148/auditql')
mongoose.connection.once('open', () => {
    console.log('Connected to MLAB database.');
});

db.on('error', function(err) {
	console.log(err);
})

// Bind GraphQL to our express server.
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Listen on port 4000.
app.listen(4000, () => {
    console.log('Server now listening on port 4000.');
});