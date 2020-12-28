import React from 'react';
import { useSelector } from "react-redux";

import { Avatar } from '@material-ui/core';

import "./Sidebar.Style.css";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebarRecentItem">
            <span className="sidebarHash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCcrK9wJiGpBUdQKsIOhu2Ke2ffSixx9soQ&usqp=CAU" alt="avatar image" />
                <Avatar src={user.photoUrl} className="sidebarAvatar">
                    {user.email[0]}   
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebarStats">
                <div className="sidebarStat">
                    <p>Who viewed your profile</p>
                    <p className="sidebarStatNumber">2,555</p>
                </div>
                <div className="sidebarStat">
                    <p>Views on your post</p>
                    <p className="sidebarStatNumber">3,555</p>
                </div>
            </div>

            <div className="sidebarBottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("nodejs")}
                {recentItem("firebase")}
            </div>
        </div>
    )
}

export default Sidebar
