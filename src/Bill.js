import React from "react";
import styled from "styled-components";
import Label from "./DollarIcon";

const Bill = () => {
  return (
    <Container>
      <StyledBill type="number"></StyledBill>
      <Label></Label>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const StyledBill = styled.input`
  font-size: 1.5rem;
  text-align: right;
  font-weight: 700;
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0.25em 0.75em 0.25em 1.5em;
  border: none;
  border-radius: 0.25em;
  background: hsl(189, 41%, 97%);
  outline-color: hsl(172, 67%, 45%);

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export default Bill;
