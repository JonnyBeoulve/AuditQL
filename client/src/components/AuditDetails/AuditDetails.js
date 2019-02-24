import React from 'react';
import { Query } from 'react-apollo';
import { Card, Heading, Text } from 'rebass';

import { getAuditQuery } from '../../api/queries';

/* This component will use an unordered list to display a list
of audits. */
const AuditDetails = ({ id }) => (
    <Query query={getAuditQuery} variables={{ id }}>
        {({ loading, error, data }) => {
            if (loading) return <Card mt={[30, 50]}><Text>Loading...</Text></Card>;
            if (error) return <Card mt={[30, 50]}><Text>Error! {error.message}</Text></Card>;

            return (
                <main>
                    <Card mt={[30, 50]}>
                        <Heading mb={3}>Audit Details</Heading>
                        <Text>Title: {data.audit.title}</Text>
                        <Text>Genre: {data.audit.genre}</Text>
                        <Text>Assigned Auditor: {data.audit.auditor.name}</Text>
                        <Text>Assigned Auditor's Specialization: {data.audit.auditor.specialization}</Text>
                    </Card>
                </main>
            );
        }}
    </Query>
);

export default AuditDetails;