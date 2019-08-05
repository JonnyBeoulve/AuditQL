import { gql } from "apollo-boost";

/* Query for all audits. */
export const getAuditsQuery = gql`
  {
    audits {
      id
      title
      genre
      status
    }
  }
`;

/* Query for all auditors. */
export const getAuditorsQuery = gql`
  {
    auditors {
      id
      name
      specialization
    }
  }
`;

/* Query for a specific audit. */
export const getAuditQuery = gql`
  query GetAudit($id: String!) {
    audit(id: $id) {
      id
      title
      genre
      status
      auditor {
        id
        name
        specialization
        audits {
          id
          title
        }
      }
    }
  }
`;

/* Mutation for adding an audit. */
export const addAuditMutation = gql`
  mutation AddAudit(
    $title: String!
    $genre: String!
    $status: String!
    $auditorId: ID!
  ) {
    addAudit(
      title: $title
      genre: $genre
      status: $status
      auditorId: $auditorId
    ) {
      id
      title
      genre
      status
    }
  }
`;
