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

// Create a root query that grabs all audits from the store.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        audit: {
            type: AuditType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return _.find(audits, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});