import React from 'react';
import { Flex, Box, Image, Link } from 'rebass';

import { Container } from '../../../theme/base';
import linkedinLogo from '../../../static/img/linkedin-logo.png';
import githubLogo from '../../../static/img/github-logo.png';
import { HeaderBox } from './headerStyling';

const Header = () => (
    <HeaderBox p={3} bg={'bgPrimary'} fontSize={6} color={'white'} width={[1]}>
        <Container>
            <Flex justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'} flexWrap={'nowrap'}>
                <Box width={[7 / 8]}>AuditQL</Box>
                <Flex justifyContent={'flex-end'} width={[1 / 8]}>
                    <Box>
                        <Link href="https://www.linkedin.com/in/jleack/">
                            <Image src={linkedinLogo} />
                        </Link>
                    </Box>
                    <Box ml={3}>
                        <Link href="https://github.com/JonnyBeoulve/AuditQL">
                            <Image src={githubLogo} />
                        </Link>
                    </Box>
                </Flex>
            </Flex>
        </Container>
    </HeaderBox>
)

export default Header;