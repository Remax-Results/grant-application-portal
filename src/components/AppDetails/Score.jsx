import React from 'react';

export default function Score(props) {
    const {qANDa} = props;

    return (<p>{qANDa.review_score}</p>)
}