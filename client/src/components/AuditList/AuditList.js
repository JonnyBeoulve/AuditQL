import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

/* This component will use an unordered list to display a list
of audits. */
const AuditList = props => {
    return (
        <section id="audit-list">
            <h1>Audits</h1>
            <ul id="audit-list-items">
                <li>Audit Name</li>
            </ul>
        </section>
    )
}

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

export default graphql(getAuditsQuery)(AuditList);