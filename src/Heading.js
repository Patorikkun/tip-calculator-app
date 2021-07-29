import React from "react";
import styled from "styled-components";

const Heading = () => {
  return <StyledHeading>SPLI TTER</StyledHeading>;
};

const StyledHeading = styled.h2`
  //border: 1px solid red;
  width: 3.5em;

  letter-spacing: 0.5rem;
  font-weight: 700;
  color: hsl(183, 100%, 15%);

  @media only screen and (min-width: 375px) and (max-width: 769px) {
    margin-top: 1.25em;
    font-size: 1.75rem;
  }
`;

export default Heading;
