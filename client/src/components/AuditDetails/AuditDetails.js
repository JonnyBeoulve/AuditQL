import React from 'react';
import { Query } from 'react-apollo';
import { Box, Button, Card, Flex, Heading, Text } from 'rebass';
import { LeftArrowCircle } from 'styled-icons/boxicons-regular/LeftArrowCircle';

import DocumentEditor from '../DocumentEditor/DocumentEditor';
import { getAuditQuery } from '../../api/queries';
import { SubHeading, SubTitle } from '../../theme/base';
import { File } from 'styled-icons/boxicons-regular/File';
import { ClipboardList } from 'styled-icons/fa-solid/ClipboardList';

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
                        <SubHeading><ClipboardList size={24} /> Vitals</SubHeading>
                        <SubTitle>Title</SubTitle>
                        <Text mb={4}>{data.audit.title}</Text>
                        <SubTitle>Genre</SubTitle>
                        <Text mb={4}>{data.audit.genre}</Text>
                        <SubTitle>Assigned Auditor</SubTitle>
                        <Text mb={4}>{data.audit.auditor.name}</Text>
                        <SubTitle>Assigned Auditor's Specialization</SubTitle>
                        <Text mb={4}>{data.audit.auditor.specialization}</Text>
                        <SubHeading><File size={24} /> Documents</SubHeading>
                        <Text mb={4}>There are currently no documents assigned to this audit. You can add one using the editor below.</Text>
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