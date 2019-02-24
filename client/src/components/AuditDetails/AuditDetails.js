import React from 'react';
import { Query } from 'react-apollo';

import { getAuditQuery } from '../../api/queries';

/* This component will use an unordered list to display a list
of audits. */
const AuditDetails = ({ id }) => (
    <Query query={getAuditQuery} variables={{ id }}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <section id="audit-details">
                    <h1>Audit Details</h1>
                    <ul>
                        <li>Title: {data.audit.title}</li>
                        <li>Genre: {data.audit.genre}</li>
                        <li>Assigned Auditor: {data.audit.auditor.name}</li>
                        <li>Assigned Auditor's Specialization: {data.audit.auditor.specialization}</li>
                    </ul>
                </section>
            );
        }}
    </Query>
);

export default AuditDetails;