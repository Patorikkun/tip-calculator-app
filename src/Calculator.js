import React, { useState } from "react";
import styled from "styled-components";
import Computations from "./Computations";
import Totals from "./Totals";

const Calculator = () => {
  const [billAmount, setBillAmount] = useState("");

  const [customTip, setCustomTip] = useState("");

  const [numPeople, setNumPeople] = useState("");

  const [tipAmount, setTipAmount] = useState("");

  const [totalAmount, setTotalAmount] = useState("");

  const [resetFields, setResetFields] = useState(false);

  const [selectedTip, setSelectedTip] = useState({ checked: {} });

  const resetHandler = () => {
    setResetFields(!resetFields);
    setBillAmount("");
    setCustomTip("");
    setNumPeople("");
    setTotalAmount("");
    setTipAmount("");
    setSelectedTip({ checked: {} });
  };

  return (
    <StyledCalculator>
      <Computations
        billAmount={billAmount}
        customTip={customTip}
        numPeople={numPeople}
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        setBillAmount={setBillAmount}
        setCustomTip={setCustomTip}
        setNumPeople={setNumPeople}
        setTipAmount={setTipAmount}
        resetFields={resetFields}
        selectedTip={selectedTip}
        setSelectedTip={setSelectedTip}
      ></Computations>

      <Totals
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        resetHandler={resetHandler}
      ></Totals>
    </StyledCalculator>
  );
};

const StyledCalculator = styled.div`
  background: white;
  height: 50%;
  width: 50%;
  border-radius: 1.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5em;

  @media only screen and (min-width: 375px) and (max-width: 769px) {
    width: 100%;
    height: 85%;
    margin-bottom: 0;
    flex-direction: column;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    justify-content: space-evenly;
  }
`;

export default Calculator;
