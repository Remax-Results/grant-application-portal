import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from 'react-bootstrap';
import moment from 'moment';


export default function AdminTitle() {
    const {start_date, end_date, funds_available} = useSelector(state=>state.currentWindow);
    const appTableData = useSelector(state=>state.appTableData);
    let disbursement = 0;
    const calculateAvailable = () => {
        appTableData.map((app)=>(app.status==='Accepted' ? disbursement += Number(app.budget) : disbursement))
        return disbursement;
    }
    return (
        <Card>
            <Card.Header style={{backgroundColor: '#1C479A', color: 'white'}}>Welcome, Administrator!</Card.Header>
            {start_date ? <Card.Text style={{}}>The current grant window is from {moment(start_date).format('LL')} until {moment(end_date).format('LL')} </Card.Text> :
                <Card.Text style={{}}>There is not currenty an open grant window</Card.Text>}
            {start_date && <Card.Text>Total Funds Initially Available: ${funds_available} </Card.Text>}
            {start_date && <Card.Text>Total Funds Currently Available : ${funds_available - calculateAvailable() }</Card.Text>}
        </Card>
    )
}