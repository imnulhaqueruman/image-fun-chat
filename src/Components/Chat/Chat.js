import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import ReactTimeAgo from 'react-timeago';
import { useDispatch } from 'react-redux';
import { selectImage } from '../../features/appSlice';
import { db } from '../../firebase'
import { useHistory } from 'react-router';
const Chat = ({id, username, profilePic, timestamp, imageUrl, read, }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const open= () =>{
        if(!read){
            dispatch(selectImage(imageUrl));
            db.collection("posts").doc(id).set(
                {
                  read:true,
                },
                {
                    merge: true,
                },
                
                history.push('/chats/view')
            );

        }
    }
    return (
        <div onClick={open} className="chat">
            <Avatar className='chat_avatar' src={profilePic}/>
            <div className="chat_info">
               <h4>{username}</h4>
               <p>Tap to view -<ReactTimeAgo date = {new Date(timestamp?.toDate()).toUTCString()}/></p>
            </div>
            {!read && <StopRoundedIcon className="chat_readIcon"/>}
            
        </div>
    );
};

export default Chat;