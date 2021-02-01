import React from 'react';
import Card from 'react-bootstrap/Card';

export default function admin() {

    return(
        <div>
            <Card>
                <Card.Header>Welcome, Administrator!</Card.Header>
                <Card.Text>The current grant window is: </Card.Text>
            </Card>

        </div>
    )
}