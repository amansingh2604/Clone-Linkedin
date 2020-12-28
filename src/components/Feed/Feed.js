import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FlipMove from 'react-flip-move';

import './Feed.Style.css';
import InputOption from '../InputOptions/InputOption';
import Post from '../Post/Post';
import { selectUser } from "../../features/userSlice";

import { db } from "../../firebase"


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, [])

    const sendPostHandler = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feedInputContainer">
                <div className="feedInput">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPostHandler} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feedInputOptions">
                    <InputOption Icon = {ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOption Icon = {SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon = {EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon = {CalendarViewDayIcon} title='Write Article' color="#7FC15E" />
                </div>
            </div>

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post 
                        key={id}
                        name= {name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>            
        </div>
    )
}

export default Feed
