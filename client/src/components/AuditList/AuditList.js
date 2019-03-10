import React from 'react';
import { Query } from 'react-apollo';
import { Box, Card, Flex, Heading, Text } from 'rebass';
import { RightArrowCircle } from 'styled-icons/boxicons-regular/RightArrowCircle';
import { DocumentText } from 'styled-icons/typicons/DocumentText';
import { Table } from 'styled-icons/boxicons-regular/Table';

import GenreRadialChart from '../Charts/GenreRadialChart/GenreRadialChart';
import { getAuditsQuery } from '../../api/queries';
import { AuditListText } from './auditListStyling';
import { DefaultButton } from '../../theme/base';
import AddAuditModal from '../Modals/AddAuditModal/AddAuditModal';

/* This component will use an unordered list to display a list
of audits. */
const AuditList = props => (
    <Query query={getAuditsQuery}>
        {({ loading, error, data }) => {
            if (loading) return <Card mt={[30, 50]}><Text>Loading...</Text></Card>;
            if (error) return <Card mt={[30, 50]}><Text>Error! {error.message}</Text></Card>;

            return (
                <main>
                    <Card mt={[30, 50]} mb={50}>
                         <Flex width={1} justifyContent={'space-between'}>
                            <Heading>All Audits</Heading>
                            <Flex justifyContent={'flex-end'}>
                                <DefaultButton><DocumentText size={16} /></DefaultButton>
                                <DefaultButton ml={10}><Table size={16} /></DefaultButton>
                                <AddAuditModal
                                    buttonText={"Add Audit"}
                                    titleText={"Add an audit"}
                                    bodyText={"Enter the parameters for the audit below."}
                                    confirmText={"Submit"}
                                    cancelText={"Cancel"}
                                />
                            </Flex>
                        </Flex>
                        <Flex mb={50} width={1} flexWrap={'wrap'} flexDirection={'row'} justifyContent={'space-between'}>
                            {data.audits.map(audit => (
                                <Box width={300}>
                                    <AuditListText mb={4} key={audit.id} onClick={() => props.selectAudit(audit.id)}>
                                        <RightArrowCircle size={18} /> {audit.title}
                                    </AuditListText>
                                </Box>
                            ))}
                        </Flex>
                        <Box mb={50}>
                            <Heading mb={3}>Audit Genre Frequency</Heading>
                            <GenreRadialChart data={data} />
                        </Box>
                    </Card>
                </main>
            );
        }}
    </Query>
);

export default AuditList;