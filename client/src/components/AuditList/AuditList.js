import React from 'react';
import { Query } from 'react-apollo';
import { Card, Flex, Heading, Text } from 'rebass';
import { RightArrowCircle } from 'styled-icons/boxicons-regular/RightArrowCircle';

import { getAuditsQuery } from '../../api/queries';
import AddAuditModal from './AddAuditModal/AddAuditModal';

/* This component will use an unordered list to display a list
of audits. */
const AuditList = props => (
    <Query query={getAuditsQuery}>
        {({ loading, error, data }) => {
            if (loading) return <Card mt={[30, 50]}><Text>Loading...</Text></Card>;
            if (error) return <Card mt={[30, 50]}><Text>Error! {error.message}</Text></Card>;

            return (
                <main>
                    <Card mt={[30, 50]}>
                         <Flex width={1} justifyContent={'space-between'}>
                            <Heading mb={3}>All Audits</Heading>
                            <AddAuditModal
                                buttonText={"Add Audit"}
                                titleText={"Add an audit"}
                                bodyText={"Enter the parameters for the audit below."}
                                confirmText={"Submit"}
                                cancelText={"Cancel"}
                            />
                        </Flex>
                        {data.audits.map(audit => (
                            <Text mb={3} key={audit.id} onClick={(id) => props.selectAudit(audit.id)}>
                                <RightArrowCircle size={16} /> {audit.title}
                            </Text>
                        ))}
                    </Card>
                </main>
            );
        }}
    </Query>
);

export default AuditList;