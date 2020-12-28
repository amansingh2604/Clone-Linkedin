import React from 'react'
import { useSelector } from 'react-redux';

import { Avatar } from '@material-ui/core';

import "./HeaderOption.Style.css";
import { selectUser } from "../../features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOptionIcon" />}
            {avatar && 
                <Avatar className="headerOptionIcon"s>
                    {user?.email[0]}
                </Avatar>
            }
            <h3 className="headerOptionTitle">{title}</h3>
        </div>
    )
}

export default HeaderOption
