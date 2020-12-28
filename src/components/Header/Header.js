import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search'; 
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

import './Header.Style.css';
import HeaderOption from '../HeaderOption/HeaderOption';
import { auth } from "../../firebase";
import { logout, selectUser } from "../../features/userSlice";

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logoutHandler = () => {
       dispatch(logout());
       auth.signOut();
    }

    return (
        <div className="header">
            <div className="headerLeft">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div className="headerSearch">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="headerRight">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messages" />
                <HeaderOption Icon={NotificationImportantIcon} title="Notifictions" />
                {!user ? <HeaderOption avatar={true} title='User'
                    onClick={logoutHandler}
                    /> : <HeaderOption avatar={true} title={user.displayName}
                    onClick={logoutHandler}
                />
                }
            </div>
        </div>
    )
}

export default Header
