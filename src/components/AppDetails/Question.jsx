import React from 'react';

export default function Question(props) {
    const {question} = props;

    return(
        <p>
            {question.question_text}
        </p>
    )
}