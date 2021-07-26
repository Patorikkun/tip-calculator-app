import React from 'react';
import styled from 'styled-components';
import Bill from './Bill';
const Computations = () => {
    return(<StyledComputations>
        <Bill></Bill>
    </StyledComputations>)
}



const StyledComputations = styled.section`
height: 88%;
width: 45%;
border: 1px solid red;`;


export default Computations;