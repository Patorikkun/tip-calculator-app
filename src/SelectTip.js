import React, { useState } from "react";
import styled from "styled-components";

const SelectTip = () => {
  const [customTip, setCustomTip] = useState();

  return (
    <StyledContainer>
      <StyledTip type="checkbox"></StyledTip>
      <StyledTip type="checkbox"></StyledTip>
      <StyledTip type="checkbox"></StyledTip>
      <StyledTip type="checkbox"></StyledTip>
      <StyledTip type="checkbox"></StyledTip>
      <StyledTip
        type="tel"
        min="0"
        max="99"
        maxLength="2"
        placeholder="Custom"
        onChange={(event) => setCustomTip(event.target.value)}
        style={
          customTip == null || customTip == ""
            ? { padding: 0 }
            : { padding: " 0.25em 0.75em 0.25em 1.5em " }
        }
      ></StyledTip>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 25%;
  gap: 1em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledTip = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #34495e;
  border-radius: 0.25em;
  height: 3.25em;
  width: 95%;
  background: hsl(183, 100%, 15%);

  &:after {
    content: "5%";
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  :nth-of-type(2) {
    &:after {
      content: "10%";
    }
  }
  :nth-of-type(3) {
    &:after {
      content: "15%";
    }
  }
  :nth-of-type(4) {
    &:after {
      content: "25%";
    }
  }
  :nth-of-type(5) {
    &:after {
      content: "50%";
    }
  }

  &[type="checkbox"]:checked {
    background: hsl(172, 67%, 45%);
  }

  &[type="tel"] {
    font-size: 1.5rem;
    text-align: right;
    font-weight: 700;
    width: 95%;
    height: 1.75em;

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

    &:after {
      content: "%";
    }

    &:focus::placeholder {
      color: transparent;
    }

    ::-webkit-input-placeholder {
      text-align: center;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      text-align: center;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      text-align: center;
    }

    :-ms-input-placeholder {
      text-align: center;
    }
  }
`;

export default SelectTip;
