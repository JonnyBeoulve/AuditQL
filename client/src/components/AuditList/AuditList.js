import React from 'react';
import { Query } from 'react-apollo';

import { getAuditsQuery } from '../../api/queries';

/* This component will use an unordered list to display a list
of audits. */
const AuditList = props => (
    <Query query={getAuditsQuery}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <section id="audit-list">
                    <h1>All Audits</h1>
                    <ul>
                        {data.audits.map(audit => (
                            <li key={audit.id} onClick={(id) => props.selectAudit(audit.id)}>
                                {audit.title}
                            </li>
                        ))}
                    </ul>
                </section>
            );
        }}
    </Query>
);

export default AuditList;