import styled from 'styled-components';
import { Box, Button, Heading, Text } from 'rebass';

/* This file contains commonly used styling attributes for the 
Styled Components implementation of this project. */
export const Container = styled(Box)`
  max-width: 1024px;
`;

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: #f6f5f6;
  background-size: cover;
`;

export const SubHeading = styled(Text)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1em;
  color: #333;
  font-weight: bold;
`;

export const SubTitle = styled(Text)`
  margin-bottom: 5px;
  font-size: 0.8em;
  color: #898989;
`;

export const DefaultButton = styled(Button)`
  padding: 0 20px 0 20px;
  background-color: #2aba90;
  color: white;
  font-size: 0.9em;
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
  box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);

  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46,61,73,.4);
    cursor: pointer;
  }
`;

/* Modal styling. */
export const ModalHeading = styled(Heading)`
  font-size: 1.5em;
  color: #333;
  font-weight: normal;
`;

export const ModalText = styled(Text)`
  font-size: 1em;
  color: #333;
`;

/* Form styling. */
export const Label = styled.label`
  position: relative;
  margin: 1.5em 0;
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
  color: #555;
  font-size: 1.2em;
`;

export const Select = styled.select`
  width: 95%;
  padding: 10px 10px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #555;
  font-size: 1.2em;
`;

export const ErrorText = styled(Text)`
  color: red;
`

/* Prose Mirror styling. */
export const ProseMirror = styled(Box)`
  
  & .ProseMirror {
    font-family: 'Open Sans', sans-serif;
    background-color: #eee;
    color: #333;
    border: 1px solid #ccc;
    box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
  }
`

/* Default props. */
Container.defaultProps = {
  mx: 'auto'
};

Heading.defaultProps = {
  mr: '20px',
  mb: '40px',
  fontSize: '2em',
  color: '#222'
}

Text.defaultProps = {
  color: '#333'
}
