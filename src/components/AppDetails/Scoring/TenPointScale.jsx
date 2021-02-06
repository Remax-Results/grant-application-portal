import React from 'react';
import styled from 'styled-components';

const NumberBox = styled.div `
    height: 30px;
    width: 30px;
    border: 1px solid black;
    text-align: center;
`
const NoScoreBox = styled.div `
    height: 30px;
    width: 90px;
    border: 1px solid black;
    text-align: center;
`


export default function TenPointScale(props) {
    const {number} = props;
    return (
        <>
        {number===0 ? <NoScoreBox>No Score</NoScoreBox> : 
            <NumberBox>{number}</NumberBox>}
        </>
    )

}