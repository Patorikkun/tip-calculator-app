import React from "react";
import styled from "styled-components";

const Reset = () => {
  return <StyledReset>RESET</StyledReset>;
};

const StyledReset = styled.button`
  width: 80%;
  padding: 0.5em 0;
  border: none;
  border-radius: 0.25em;
  background: hsl(172, 67%, 45%);
  font-size: 1.25rem;
  color: hsl(183, 100%, 15%);
  font-weight: 700;
`;

export default Reset;
