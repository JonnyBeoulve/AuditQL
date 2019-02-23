const graphql = require('graphql');
const _ = require('lodash');
const Audit = require('../models/audit');
const Auditor = require('../models/auditor');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

// Import mock data.
const audits = require('../store/audits.js');
const auditors = require('../store/auditors.js');

// Define structures.
const AuditType = new GraphQLObjectType({
    name: 'Audit',
    fields: ( ) => ({
        id: { type: GraphQLString },
        genre: { type: GraphQLString },
        auditor: {
            type: AuditorType,
            resolve(parent, args){
                return _.find(auditors, { id: parent.auditorId });
            }
        }
    })
});

const AuditorType = new GraphQLObjectType({
    name: 'Auditor',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        audits: {
            type: new GraphQLList(AuditType),
            resolve(parent, args){
                //
            }
        }
    })
});

// Create a root query that grabs all audits from the store.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        audit: {
            type: AuditType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return _.find(audits, { id: args.id });
            }
        },
        auditor: {
            type: AuditorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(auditors, { id: args.id });
            }
        },
        audits: {
            type: new GraphQLList(AuditType),
            resolve(parent, args){
                return audits;
            }
        },
        auditors: {
            type: new GraphQLList(AuditorType),
            resolve(parent, args){
                return auditors;
            }
        }
    }
});

// Add mutation for adding an auditor.
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuditor: {
            type: AuditorType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args){
                let auditor = new Auditor({
                    name: args.name
                });
                return auditor.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});