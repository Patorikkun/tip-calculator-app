import React from "react";
import styled from "styled-components";
import Reset from "./Reset";
const Totals = ({ totalAmount, tipAmount, resetHandler }) => {
  return (
    <StyledSection>
      <TotalContainer>
        <Label>
          Tip Amount<SubLabel>/ person</SubLabel>
        </Label>

        <Amount>
          {!tipAmount || tipAmount == Infinity ? "0.00" : tipAmount}
        </Amount>
      </TotalContainer>
      <TotalContainer>
        <Label>
          Total<SubLabel>/ person</SubLabel>
        </Label>

        <Amount>
          {!totalAmount || totalAmount == Infinity ? "0.00" : totalAmount}
        </Amount>
      </TotalContainer>

      <Reset resetHandler={resetHandler}></Reset>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  height: 88%;
  width: 45%;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: hsl(183, 100%, 15%);

  @media only screen and (min-width: 375px) and (max-width: 769px) {
    height: 35%;
    width: 80%;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 75%;

  &:nth-of-type(2) {
    margin-top: -5em;
  }

  @media only screen and (min-width: 375px) and (max-width: 769px) {
    width: 85%;
    &:nth-of-type(2) {
      margin-top: -2.5em;
    }
  }
`;
const Label = styled.h4`
  color: hsl(189, 41%, 97%);
  font-weight: 700;
`;

const SubLabel = styled.p`
  color: hsl(184, 14%, 56%);
  font-weight: 700;
`;

const Amount = styled.span`
  color: hsl(172, 67%, 45%);
  font-size: 3rem;
  font-weight: 700;
`;

export default Totals;
