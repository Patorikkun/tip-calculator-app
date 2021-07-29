import React from "react";
import styled from "styled-components";
import Bill from "./Bill";
import SelectTip from "./SelectTip";
import PeopleNum from "./PeopleNum";
const Computations = () => {
  return (
    <StyledComputations>
      <OptionContainer>
        <Label>Bill</Label>
        <Bill></Bill>
      </OptionContainer>
      <OptionContainer>
        <Label>Select Tip %</Label>
        <SelectTip></SelectTip>
      </OptionContainer>
      <OptionContainer>
        <Label>Number of People</Label>
        <PeopleNum></PeopleNum>
      </OptionContainer>
    </StyledComputations>
  );
};

const StyledComputations = styled.section`
  height: 85%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media only screen and (min-width: 375px) and (max-width: 769px) {
    width: 80%;
    height: 60%;
    justify-content: space-evenly;
  }
`;

const OptionContainer = styled.div`
  width: 100%;
`;

const Label = styled.h4`
  font-weight: 700;
  color: hsl(186, 14%, 43%);
  margin-bottom: 1em;
`;

export default Computations;
