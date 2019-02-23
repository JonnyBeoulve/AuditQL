const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Define structure for audits.
const AuditType = new GraphQLObjectType({
    name: 'Audit',
    fields: ( ) => ({
        id: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});