import styled from 'styled-components';
import { Box, Text } from 'rebass';

/* This file contains commonly used styling attributes for the 
Styled Components implementation of this project. */
export const Container = styled(Box)`
  max-width: 1024px;
`;

Container.defaultProps = {
  mx: 'auto'
};

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: #f6f5f6;
  background-size: cover;
`;

export const SubTitle = styled(Text)({
  fontSize: '0.6em',
  color: '#898989',
  fontWeight: 'bold'
});