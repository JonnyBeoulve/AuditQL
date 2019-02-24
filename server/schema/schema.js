const graphql = require('graphql');
const _ = require('lodash');
const Audit = require('../models/audit');
const Auditor = require('../models/auditor');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// Define fields and resolves.
const AuditType = new GraphQLObjectType({
    name: 'Audit',
    fields: ( ) => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        status: { type: GraphQLString },
        auditor: {
            type: AuditorType,
            resolve(parent, args){
                return Auditor.findById(parent.auditorId);
            }
        }
    })
});

const AuditorType = new GraphQLObjectType({
    name: 'Auditor',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        specialization: { type: GraphQLString },
        audits: {
            type: new GraphQLList(AuditType),
            resolve(parent, args){
                return Audit.find({ auditorId: parent.id })
            }
        }
    })
});

// Create a root query for the primary functional queries.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        audit: {
            type: AuditType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Audit.findById(args.id);
            }
        },
        auditor: {
            type: AuditorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Auditor.findById(args.id);
            }
        },
        audits: {
            type: new GraphQLList(AuditType),
            resolve(parent, args){
                return Audit.find({});
            }
        },
        auditors: {
            type: new GraphQLList(AuditorType),
            resolve(parent, args){
                return Auditor.find({});
            }
        }
    }
});

// Mutations for adding an auditor and audit.
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuditor: {
            type: AuditorType,
            args: {
                name: { type: GraphQLString },
                specialization: { type: GraphQLString }
            },
            resolve(parent, args){
                let auditor = new Auditor({
                    name: args.name,
                    specialization: args.specialization
                });
                return auditor.save();
            }
        },
        addAudit: {
            type: AuditType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                status: { type: new GraphQLNonNull(GraphQLString) },
                auditorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                let audit = new Audit({
                    title: args.title,
                    genre: args.genre,
                    status: args.status,
                    auditorId: args.auditorId
                });
                return audit.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});