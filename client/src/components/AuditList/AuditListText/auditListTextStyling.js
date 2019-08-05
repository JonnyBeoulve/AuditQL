import styled from "styled-components";
import { Text } from "rebass";

/* This file contains commonly used styling attributes for the 
Styled Components implementation of this project. */
export const AuditText = styled(Text)`
  font-size: 1.2em;
  color: #555;
  align-items: center;
  text-align: left;

  &:hover {
    cursor: pointer;
    color: #2aba90;
  }
`;
