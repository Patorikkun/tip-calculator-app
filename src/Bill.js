import React from 'react';
import styled from 'styled-components';
import Label from './DollarIcon';

const Bill = () => {
    return(
        <Container>
            <Heading>Bill</Heading>
            <Label></Label>
            <StyledBill></StyledBill>
        </Container>
    )
}


const Container = styled.div``;

const Heading = styled.h3``;

const StyledBill = styled.input`
font-size: 2rem;
text-align: right;
font-weight: 700;
width: 90%;
`;



export default Bill;