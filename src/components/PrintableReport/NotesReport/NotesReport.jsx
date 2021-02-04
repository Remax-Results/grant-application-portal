import React from 'react';

export default function NotesReport(props) {
    const {n} = props;
    return (
        <div>
            <p>{n.date_added}</p>
            <p>{n.review_note}</p>
        </div>
    )
}