import React from 'react';

export default function ScoreReport(props) {
    const {qa} = props;
    return (
        <div>
            <h4>{qa.question_text} </h4>
            <p>{qa.answer_text} {qa.review_score}</p>
        </div>
    )
}