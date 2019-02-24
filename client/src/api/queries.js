import { gql } from 'apollo-boost';

/* Query for all audits. */
export const getAuditsQuery = gql`
{
    audits {
        id
        title
        genre
    }
}
`

/* Query for all auditors. */
export const getAuditorsQuery = gql`
    {
        auditors {
            name
            specialization
        }
    }
`;

/* Query for a specific audit. */
export const getAuditQuery = gql`
    query GetAudit($id: String!){
        audit(id: $id) {
            id
            title
            genre
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
