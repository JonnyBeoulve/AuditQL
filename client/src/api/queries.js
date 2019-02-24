import { gql } from 'apollo-boost';

/* GraphQL query for all audits. */
const getAuditsQuery = gql`
{
    audits {
        id
        title
        genre
    }
}
`

export { getAuditsQuery };