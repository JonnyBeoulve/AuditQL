import { gql } from 'apollo-boost';

/* Query for all audits. */
const getAuditsQuery = gql`
{
    audits {
        id
        title
        genre
    }
}
`

/* Query for all auditors. */
const getAuditorsQuery = gql`
    {
        auditors {
            name
            specialization
        }
    }
`;

/* Query for a specific audit. */
const getAuditQuery = gql`
    query GetAudit($id: ID){
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
                    name
                }
            }
        }
    }
`;


export { getAuditsQuery, getAuditorsQuery, getAuditQuery };