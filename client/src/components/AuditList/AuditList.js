import React from 'react';
import { Query } from 'react-apollo';
import { Box, Card, Flex, Heading, Text } from 'rebass';
import { RightArrowCircle } from 'styled-icons/boxicons-regular/RightArrowCircle';
import { RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

import { getAuditsQuery } from '../../api/queries';
import AddAuditModal from '../Modals/AddAuditModal/AddAuditModal';
import { AuditListText } from './auditListStyling';

/*const myData = [
    { angle: 1, radius: 10 },
    { angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20 },
    { angle: 5, radius: 5, label: 'Alt Label' }, { angle: 3, radius: 14 },
    { angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class' }
];*/

/* This component will use an unordered list to display a list
of audits. */
const AuditList = props => (
    <Query query={getAuditsQuery}>
        {({ loading, error, data }) => {
            if (loading) return <Card mt={[30, 50]}><Text>Loading...</Text></Card>;
            if (error) return <Card mt={[30, 50]}><Text>Error! {error.message}</Text></Card>;

            /* Determine number of audits per genre for D3 graph. */
            const totalComplianceAudits = data.audits.reduce(function (total, audit) {
                return audit.genre === 'Compliance' ? total + 1 : total
            }, 0);
            const totalFinancialAudits = data.audits.reduce(function (total, audit) {
                return audit.genre === 'Financial' ? total + 1 : total
            }, 0);
            const totalInvestigativeAudits = data.audits.reduce(function (total, audit) {
                return audit.genre === 'Investigative' ? total + 1 : total
            }, 0);
            const totalOperationalAudits = data.audits.reduce(function (total, audit) {
                return audit.genre === 'Operational' ? total + 1 : total
            }, 0);
            
            /* Define chart data. */
            const auditChartData = [
                { angle: totalComplianceAudits, radius: 1, label: 'Compliance' },
                { angle: totalFinancialAudits, radius: 1, label: 'Financial' },
                { angle: totalInvestigativeAudits, radius: 1, label: 'Investigative' },
                { angle: totalOperationalAudits, radius: 1, label: 'Operational' }
            ]

            return (
                <main>
                    <Card mt={[30, 50]} mb={50}>
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
                        <Box mb={50}>
                            {data.audits.map(audit => (
                                <AuditListText mb={4} key={audit.id} onClick={() => props.selectAudit(audit.id)}>
                                    <RightArrowCircle size={18} /> {audit.title}
                                </AuditListText>
                            ))}
                        </Box>
                        <Box mb={50}>
                            <Heading mb={3}>Audit Genre Frequency</Heading>
                            <RadialChart
                                showLabels={true}
                                data={auditChartData}
                                width={400}
                                height={400}
                            />
                        </Box>
                    </Card>
                </main>
            );
        }}
    </Query>
);

export default AuditList;