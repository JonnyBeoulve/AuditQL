import React from 'react';
import { Box, Flex } from 'rebass';

import { RightArrowCircle } from 'styled-icons/boxicons-regular/RightArrowCircle';
import { AuditText } from './auditListTextStyling';

/* This will map an array of audit items in text format. */
const AuditListText = ({ data, selectAudit }) => (
    <Flex mb={50} width={1} flexWrap={'wrap'} flexDirection={'row'} justifyContent={'space-between'}>
        {data.audits.map(audit => (
            <Box width={300}>
                <AuditText mb={4} key={audit.id} onClick={() => selectAudit(audit.id)}>
                    <RightArrowCircle size={18} /> {audit.title}
                </AuditText>
            </Box>
        ))}
    </Flex>
)

export default AuditListText