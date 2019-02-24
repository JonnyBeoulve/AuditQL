import styled from 'styled-components';
import { Box } from 'rebass';

/* This file contains commonly used styling attributes for the 
Styled Components implementation of this project. */
export const Container = styled(Box)`
  max-width: 1024px;
  diplay: inline-flex;
`;

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: #f6f5f6;
  background-size: cover;
`;

Container.defaultProps = {
  mx: 'auto'
};