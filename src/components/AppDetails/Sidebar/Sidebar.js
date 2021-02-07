import React, { useState } from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';


function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const user = useSelector((store) => store.user);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li>
                        {user.contact_name}
                    </li>
                    <li>
                        {user.phone}
                    </li>
                    <li>
                        {user.org_name}
                    </li>
                    <li>
                        {user.background}
                    </li>
                    <li>
                        {user.username}
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;