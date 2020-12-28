import React, {forwardRef} from 'react'

import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import "./Post.Style.css";
import InputOption from '../InputOptions/InputOption';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="post">
           <div className="postHeader">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="postInfo">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
           </div> 

           <div className="postBody">
                <p>{message}</p>
           </div>

           <div className="postButtons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} title='Connect' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
           </div>
        </div>
    )
})

export default Post
