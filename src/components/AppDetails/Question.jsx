import React from 'react';

export default function Question(props) {
    const {qANDa} = props;

    return(
        <p>
            {qANDa.question_text}
        </p>
    )
}