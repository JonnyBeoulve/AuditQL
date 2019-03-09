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

/* Form styling. */
export const Label = styled.label`
  position: relative;
  margin: 1em 0;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  color: #898989;
  font-size: 0.8em;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px 10px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
`;

export const Select = styled.select`
  width: 90%;
  padding: 5px 10px 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
`;

export const ErrorText = styled(Text)`
  color: red;
`