import React from 'react';

export default function AppTableList(app) {

    return(
        <>
        <tr key={app.id}>
            <td>{app.app.org_name}</td>
            <td>{app.app.contact_name}</td>
            <td>{app.app.phone}</td>
            <td>{app.app.username}</td>
            <td>{app.app.budget}</td>
            <td>{app.app.focus}</td>
            <td>{app.app.date_received}</td>
            <td>{app.app.status}</td>
            <td><button>Details/Score</button></td>
        </tr>
        </>
    )
}