import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import moment from 'moment';
import UpdateStatus from '../UpdateStatus/UpdateStatus.jsx';
import Icon02 from "../../../logos/Icons-02.png";



function Sidebar(props) {

    const history = useHistory();
    const [sidebar, setSidebar] = useState(false);
    const { budget, focus, contact_name, date_received, phone, username } = props.detailsData;
    const { id } = props.id;

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        
            <div className="navbar">
                <FaIcons.FaBars onClick={showSidebar} className="menu-bars" /> 
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className='nav-menu-items'>
                    <div className='navbar-toggle' onClick={showSidebar}>
                        <img className="rf-logo" src={Icon02} alt="RF Logo"></img>
                    </div>
                
                    <h4 style={{ color: '#fff' }} onClick={showSidebar}><u>Contact Information</u></h4>
                    <br />
                    <div className="nav-text">
                        <p>
                            <b>Contact Name:</b>
                            &nbsp;
                            {contact_name}
                        </p>
                    </div>
                    <div className="nav-text">
                        <p>
                            <b>Phone:</b>
                            &nbsp;
                            {phone}
                        </p>
                    </div>
                    <div className="nav-text">
                        <p>
                            <b>Email:</b>
                            &nbsp;
                            {username}
                        </p>
                    </div>
                    <div className="nav-text">
                        <p>
                            <b>Date Received:</b>
                            &nbsp;
                            {moment(date_received).format('LL')}
                        </p>
                    </div>
                    <div className="nav-text">
                        <p>
                            <b>Focus Area:</b>
                            &nbsp;
                            {focus}
                        </p>
                    </div>
                    <div className="nav-text">
                        <p>
                            <b>Budget:</b>
                            &nbsp;
                            {budget}
                        </p>
                    </div>
                    <UpdateStatus className="sideNav-btn" />
                    <Button onClick={()=>{history.push(`/report/${id}`)}} className="sideNav-btn">View Printable Report</Button>
                    <Button onClick={()=>{history.push('/admin')}} className="sideNav-btn">Back to Admin Main Page</Button>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;