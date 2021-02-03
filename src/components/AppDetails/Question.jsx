import React from 'react';

export default function Question(props) {
    const {qANDa} = props;

    return(
       <>
            {qANDa.question_text}
        </>
    )
}