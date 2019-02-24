import React from 'react';
import { Query } from 'react-apollo';
import { Box, Card, Heading, Text } from 'rebass';
import { RightArrowCircle } from 'styled-icons/boxicons-regular/RightArrowCircle';

import { getAuditsQuery } from '../../api/queries';

/* This component will use an unordered list to display a list
of audits. */
const AuditList = props => (
    <Query query={getAuditsQuery}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <main>
                    <Card mt={[30, 50]}>
                        <Heading mb={3}>All Audits</Heading>
                        {data.audits.map(audit => (
                            <Text key={audit.id} onClick={(id) => props.selectAudit(audit.id)}>
                                {audit.title} <RightArrowCircle size={18} />
                            </Text>
                        ))}
                    </Card>
                </main>
            );
        }}
    </Query>
);

export default AuditList;