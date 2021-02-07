import React, {useState} from 'react';
import styled from 'styled-components';

const NumberBox = styled.div `
    height: 30px;
    width: 30px;
    border: 1px solid black;
    text-align: center;
`

export default function MakeScale({number, selected=false, onSelect = f => f}) {
    return (
        <>
            <NumberBox style={{backgroundColor: selected ? 'red' : 'white'}} onClick={onSelect}>{number > 0 ? number : 'X'} 
            </NumberBox>
        </>
    )
}