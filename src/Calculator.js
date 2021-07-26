import React from 'react';
import styled from 'styled-components';
import Computations from './Computations';
import Totals from './Totals';

const Calculator = () => {
    return(<StyledCalculator>
        <Computations></Computations>
        <Totals></Totals>
    </StyledCalculator>)
}



const StyledCalculator = styled.div`
background: hsl(189, 41%, 97%);
height: 50%;
width: 50%;
border-radius: 1.5em;
display: flex;
justify-content: space-evenly;
align-items: center;
`


export default Calculator