import React from 'react';
import { Query } from 'react-apollo';
import { Box, Button, Card, Flex, Heading, Text } from 'rebass';
import { LeftArrowCircle } from 'styled-icons/boxicons-regular/LeftArrowCircle';

import DocumentEditor from '../DocumentEditor/DocumentEditor';
import { getAuditQuery } from '../../api/queries';

/* This component will use an unordered list to display a list
of audits. */
const AuditDetails = ({ id, selectAudit }) => (
    <Query query={getAuditQuery} variables={{ id }}>
        {({ loading, error, data }) => {
            if (loading) return <Card mt={[30, 50]}><Text>Loading...</Text></Card>;
            if (error) return <Card mt={[30, 50]}><Text>Error! {error.message}</Text></Card>;

            return (
                <main>
                    <Card mt={[30, 50]}>
                        <Flex width={1} justifyContent={'space-between'}>
                            <Heading mb={3}>Audit Details</Heading>
                            <Button bg={'bgPrimary'} fontSize={'1'} onClick={(id) => selectAudit(null)}><LeftArrowCircle size={16} /> Return</Button>
                        </Flex>
                        <Text fontSize={'1'} color={'darkgrey'}>Title</Text>
                        <Text mb={3}>{data.audit.title}</Text>
                        <Text fontSize={'1'} color={'darkgrey'}>Genre</Text>
                        <Text mb={3}>{data.audit.genre}</Text>
                        <Text fontSize={'1'} color={'darkgrey'}>Assigned Auditor</Text>
                        <Text mb={3}>{data.audit.auditor.name}</Text>
                        <Text fontSize={'1'} color={'darkgrey'}>Assigned Auditor's Specialization</Text>
                        <Text mb={3}>{data.audit.auditor.specialization}</Text>
                        <Heading fontSize={3} mt={5} mb={3}>Documents</Heading>
                        <Text mb={3}>There are currently no documents assigned to this audit.</Text>
                        <Text mb={3} mt={4} fontSize={'1'} color={'darkgrey'}>Add Document</Text>
                        <Box>
                            <DocumentEditor />
                        </Box>
                    </Card>
                </main>
            );
        }}
    </Query>
);

export default AuditDetails;