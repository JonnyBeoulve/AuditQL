import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

/* This component will use an unordered list to display a list
of audits. */
const AuditList = props => (
    <Query query={getAuditsQuery}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <section id="audit-list">
                    <h1>Audits</h1>
                    <ul>
                        {data.audits.map(audit => (
                            <li key={audit.id}>{audit.title}</li>
                        ))}
                    </ul>
                </section>
            );
        }}
    </Query>
);
    
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

export default AuditList;